import Docs from "containers/Docs/Docs";
import Examples from "containers/Examples/Examples";
import Home from "containers/Home/Home";
import Playground from "containers/Playground/Playground";
import RunExample from "containers/RunExample/RunExample";

export const routes = [
  { path: "/", component: Home, title: "Home | Percept" },
  { path: "/docs", component: Docs, title: "Docs | Percept" },
  { path: "/examples", component: Examples, title: "Examples | Percept" },
  { path: "/examples/:name", component: RunExample, title: "Run | Percept" },
  { path: "/playground", component: Playground, title: "Playground | Percept" },
];
