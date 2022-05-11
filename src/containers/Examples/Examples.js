import React from "react";

import "./Examples.css";
import examplesData from "assets/data/examples.json";
import ExampleCard from "components/Common/ExampleCard/ExampleCard";

const Examples = React.forwardRef((_props, ref) => {
  return (
    <div ref={ref} className="examples-body">
      <section className="pt-4">
        <h1>Examples</h1>
        <hr />
      </section>
      {examplesData.map((category) => (
        <section key={category.id} className="mt-4">
          <h2>{category.name}</h2>
          <div className="examples-content">
            {category.examples.map((exampleData) => (
              <ExampleCard key={exampleData.id} data={exampleData} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
});

export default Examples;
