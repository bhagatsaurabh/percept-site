import React from "react";

import "./Home.css";
import logoTransparent from "assets/images/logo-transparent.png";
import ActionButton from "components/Common/ActionButton/ActionButton";
import Code from "components/Common/Code/Code";
import CodeGroup from "components/Common/CodeGroup/CodeGroup";
import ExternalLink from "components/Common/ExternalLink/ExternalLink";
import CodeLive from "components/Common/CodeLive/CodeLive";

const Home = React.forwardRef((_props, ref) => {
  return (
    <div ref={ref} className="home-body">
      <section>
        <img className="home-logo" src={logoTransparent} alt="Percept logo" />
        <h1 className="description">An HTML5 Canvas Rendering Engine</h1>
        <div className="action-buttons">
          <ActionButton to="/docs" type="primary">
            Docs
          </ActionButton>
          <ActionButton to="/playground" state="home-example" type="secondary">
            Playground
          </ActionButton>
          <ActionButton to="/examples" type="primary">
            Examples
          </ActionButton>
        </div>
      </section>
      <section>
        <h3 className="summary">
          Working with HTML5 canvas can be quite difficult, especially if you're making an
          animation, game, or adding interactivity. <br />
          <br />
          Percept provides an easy-to-use API for rendering on canvas.
        </h3>
      </section>
      <section>
        <CodeGroup tabs={["NPM", "YARN", "CDN"]}>
          <Code language="shell">npm i canvas-percept</Code>
          <Code language="shell">yarn add canvas-percept</Code>
          <Code language="html">
            {`<script src="https://cdn.jsdelivr.net/npm/canvas-percept@1.0.17/dist/percept.js"></script>`}
          </Code>
        </CodeGroup>
      </section>
      <section className="features">
        <h2>Modular, Dynamic & Stateful</h2>
        <p style={{ textAlign: "left" }}>
          Everything that is rendered is an object, either isolated or dependent on one another,
          creating a{" "}
          <ExternalLink to="https://en.wikipedia.org/wiki/Scene_graph">scene-graph</ExternalLink>
          .
          <br />
          <br />
          Changes applied on these objects (such as position, rotation &amp; scale) flow down to the
          dependents updating their states along the way.
        </p>
      </section>
      <section className="home-example">
        <CodeLive
          title="A basic example"
          type="tab"
          snippet="home-example"
          language="javascript"
          editable
        />
      </section>
    </div>
  );
});

export default Home;
