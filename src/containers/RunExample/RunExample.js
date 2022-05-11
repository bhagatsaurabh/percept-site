import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { findExampleData } from "utils/utils";
import examplesData from "assets/data/examples.json";
import "./RunExample.css";
import CodeLive from "components/Common/CodeLive/CodeLive";

const RunExample = React.forwardRef((_props, ref) => {
  const { name } = useParams();

  const [data, setData] = useState(findExampleData(examplesData, name));

  useEffect(() => {
    if (name) {
      setData(findExampleData(examplesData, name));
    }
  }, [name]);

  return (
    <div ref={ref} className="run-example-container">
      <h1 className="pt-4">{data.name}</h1>
      <hr />
      <pre className="run-example-description">{data.description}</pre>
      <CodeLive title={data.name} type="split" snippet={data.slug} language="javascript" editable />
    </div>
  );
});

export default RunExample;
