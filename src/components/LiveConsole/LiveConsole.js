import React from "react";
import { Hook, Console, Unhook } from "console-feed";

import "./LiveConsole.css";
import { ThemeContext } from "utils/theme-context";
import { caretIcon } from "assets/icons";
import { classes } from "utils/utils";

export default class LiveConsole extends React.Component {
  state = { logs: [], opened: false, error: false, filterQuery: "" };

  constructor(props) {
    super(props);
    window.onmessage = (ev) => {
      if (ev.data.key === "percept-live") {
        this.setState((prevState) => {
          return {
            ...prevState,
            logs: [...prevState.logs, { method: "error", data: [ev.data.message] }],
            error: true,
          };
        });
      }
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.iframeRef !== this.props.iframeRef && this.props.iframeRef?.contentWindow) {
      Hook(
        this.props.iframeRef.contentWindow.console,
        (log) => {
          this.setState((prevState) => {
            let newError = prevState.error;
            if (log.method === "error") newError = true;
            else if (log.method === "clear") {
              newError = false;
              return {
                ...prevState,
                logs: [],
                error: newError,
              };
            }

            return {
              ...prevState,
              logs: [...prevState.logs, log],
              error: newError,
            };
          });
        },
        false
      );
    }
  }

  componentWillUnmount() {
    Unhook(window.console);
  }

  consoleHandler() {
    this.setState({ ...this.state, opened: !this.state.opened });
  }

  render() {
    return (
      <div className={classes("live-console-container", { open: this.state.opened })}>
        <div onClick={() => this.consoleHandler()} className="live-console-header">
          <div className="console-header-left">
            <img src={caretIcon} className="console-caret" alt="Console caret" />
            <span>Console</span>
            <span className={classes("log-counter", { error: this.state.error })}>
              {this.state.logs.length}
            </span>
          </div>
          <div className="console-header-right">
            <span>Filter</span>
            <input
              onClick={(e) => e.stopPropagation()}
              className="console-filter-input"
              type="text"
              spellCheck={false}
              value={this.state.filterQuery}
              onChange={(e) =>
                this.setState((state) => ({ ...state, filterQuery: e.target.value }))
              }
            />
          </div>
        </div>
        <div style={{ overflow: "auto", maxHeight: "calc(100% - 2rem)", textAlign: "left" }}>
          <Console
            filter={[]}
            searchKeywords={this.state.filterQuery}
            logs={this.state.logs}
            variant={this.context}
          />
        </div>
      </div>
    );
  }
}

LiveConsole.contextType = ThemeContext;
