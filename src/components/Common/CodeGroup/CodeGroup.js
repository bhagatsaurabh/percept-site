import { useState } from "react";

import "./CodeGroup.css";

function CodeGroup({ children, tabs, activeTab }) {
  const [currentTab, setTab] = useState(activeTab ?? 0);

  return (
    <div className="code-group">
      <div className="code-group-tabs">
        <ul>
          {tabs.map((tabName, index) => (
            <li key={index} className={index === currentTab ? "active" : ""}>
              <button onClick={() => setTab(index)}>{tabName}</button>
            </li>
          ))}
        </ul>
      </div>
      {children.map((child, index) => (
        <div
          key={index}
          className={`code-group-item ${currentTab === index ? "active" : ""}`}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

export default CodeGroup;
