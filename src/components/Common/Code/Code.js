import { useEffect, useState, useRef } from "react";
import Prism from "prismjs";

import "./Code.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-javascript";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import { copyIcon, runIcon, editIcon } from "assets/icons";

function Code({
  snippet,
  language,
  children,
  executable,
  editable,
  onExecute,
  onEdit,
  onLoad,
  showLineNo,
}) {
  const codeEl = useRef(null);
  const [code, setCode] = useState("");
  const [timerId, setTimerId] = useState(null);
  const [copied, setCopied] = useState(null);

  useEffect(() => {
    if (snippet && typeof snippet === "string") {
      fetch(`/snippets/${snippet}.js`)
        .then((res) => res.text())
        .then((value) => setCode(value));
    }
  }, [snippet]);

  useEffect(() => {
    Prism.highlightElement(codeEl.current);
    onLoad && onLoad(code);
  }, [onLoad, code]);

  const copyHandler = () => {
    navigator.clipboard.writeText(code);
    setCopied("Copied");

    if (timerId !== null) clearTimeout(timerId);

    const id = setTimeout(() => {
      setTimerId(null);
      setCopied(null);
    }, 1500);

    setTimerId(id);
  };

  return (
    <div className="code-block-container">
      <div className="toolbar">
        <span className="status language">{copied || language}</span>
        <button onClick={copyHandler} className="tooltip" data-title="Copy">
          <img className="code-icon" src={copyIcon} alt="Copy code" />
        </button>
        {executable && (
          <button onClick={() => onExecute(code)} className="tooltip" data-title="Run">
            <img className="code-icon" src={runIcon} alt="Run code" />
          </button>
        )}
        {editable && (
          <button onClick={onEdit} className="tooltip" data-title="Edit">
            <img className="code-icon" src={editIcon} alt="Edit playground" />
          </button>
        )}
      </div>
      <pre className={`code-block ${showLineNo ? "line-numbers" : ""}`}>
        <code ref={codeEl} className={`language-${language}`}>
          {children ?? code}
        </code>
      </pre>
    </div>
  );
}

export default Code;
