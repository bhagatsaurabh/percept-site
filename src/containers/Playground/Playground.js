import React, { useContext, useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { useLocation } from "react-router-dom";
import { useBeforeMount, useLocalStorage } from "utils/custom-hooks";
// eslint-disable-next-line import/no-webpack-loader-syntax
import perceptDeclarations from "!!raw-loader!../../../node_modules/canvas-percept/dist/percept.d.ts";

import "./Playground.css";
import Live from "components/Common/Live/Live";
import PlaygroundNav from "components/PlaygroundNav/PlaygroundNav";
import SuspenseOverlay from "components/Common/SuspenseOverlay/SuspenseOverlay";
import { dragHandleIcon } from "assets/icons";
import { ThemeContext } from "utils/theme-context";

const Playground = React.forwardRef((_props, ref) => {
  const location = useLocation();
  const theme = useContext(ThemeContext);
  const [run, setRun] = useState("play");
  const [code, setCode] = useState("");
  const [isResizing, _setIsResizing] = useState(false);
  const isResizingRef = useRef(isResizing);
  const setIsResizing = (value) => {
    isResizingRef.current = value;
    _setIsResizing(value);
  };
  const dividerEl = useRef(null);
  const editorEl = useRef(null);
  const mql = useRef(window.matchMedia("(min-width: 768px)"));
  const [savedCode, setSavedCode] = useLocalStorage("percept-playground-code", "");
  const [splitDimension, setSplitDimension] = useLocalStorage("percept-split-dim", {
    horizontal: null,
    vertical: null,
  });

  const downHandler = () => {
    setIsResizing(true);
  };
  const moveHandler = (ev) => {
    if (isResizingRef.current) {
      if (mql.current.matches) {
        if (ev.clientX > window.innerWidth * 0.3 && ev.clientX < window.innerWidth * 0.8) {
          editorEl.current.setAttribute(
            "style",
            `width: calc(${ev.clientX.toFixed(2)}px - 0.2rem) !important`
          );
          setSplitDimension({ ...splitDimension, horizontal: ev.clientX.toFixed(2) });
        }
      } else {
        if (ev.clientY > window.innerHeight * 0.3 && ev.clientY < window.innerHeight * 0.8) {
          editorEl.current.setAttribute(
            "style",
            `height: calc(${ev.clientY.toFixed(2)}px - 7.1rem) !important`
          );
          setSplitDimension({ ...splitDimension, vertical: ev.clientY.toFixed(2) });
        }
      }
    }
  };
  const upHandler = () => {
    setIsResizing(false);
  };

  useBeforeMount(
    () => {
      document.addEventListener("pointermove", (ev) => moveHandler(ev));
      document.addEventListener("pointerup", (ev) => upHandler(ev));

      if (location.state) {
        fetch(`/snippets/${location.state}.js`)
          .then((res) => res.text())
          .then((value) => setCode(value));
      }
    },
    () => {
      document.removeEventListener("pointermove", moveHandler);
      document.removeEventListener("pointerup", upHandler);
    }
  );

  useEffect(() => {
    if (
      (editorEl?.current && mql.current.matches && splitDimension.horizontal) ||
      (!mql.current.matches && splitDimension.vertical)
    ) {
      editorEl.current.setAttribute(
        "style",
        `width: calc(${
          mql.current.matches ? splitDimension.horizontal : splitDimension.vertical
        }px - 0.2rem) !important`
      );
    }
  }, []);

  const editorWillMountHandler = (monaco) => {
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES6,
      allowNonTsExtensions: true,
    });
    monaco.languages.typescript.javascriptDefaults.addExtraLib(
      `declare module 'canvas-percept' { ${perceptDeclarations} } declare const Percept: typeof import('canvas-percept');`,
      `inmemory://model/${"external.d.ts"}`
    );
  };
  const editorChangeHandler = (value) => {
    setCode(value);
    setSavedCode(value);
  };
  const controlHandler = () => {
    setRun(run === "play" ? "stop" : "play");
  };

  const navActionHandler = (action) => {
    if (action.type === "load") {
      fetch(`/snippets/${action.data}.js`)
        .then((res) => res.text())
        .then((value) => setCode(value));
    } else if (action.type === "local-load") {
      setCode(savedCode);
    }
  };

  return (
    <div ref={ref} className="playground">
      <PlaygroundNav onAction={navActionHandler} />
      <div className="playground-container">
        <div ref={editorEl} className="playground-editor">
          <Editor
            width="100%"
            height="100%"
            defaultLanguage="javascript"
            defaultValue=""
            value={code}
            theme={theme === "light" ? theme : "vs-dark"}
            onChange={editorChangeHandler}
            beforeMount={editorWillMountHandler}
            loading={
              <SuspenseOverlay warnTimeout={6000}>
                <p>Initializing Playground</p>
              </SuspenseOverlay>
            }
          />
        </div>
        <div ref={dividerEl} className="divider" onPointerDown={downHandler}>
          <button className="drag-handle">
            <img draggable="false" src={dragHandleIcon} alt="Drag handle" />
          </button>
        </div>
        <Live
          state={run}
          onControl={controlHandler}
          code={code}
          deferred={2000}
          resizing={isResizing}
        />
      </div>
    </div>
  );
});

export default Playground;
