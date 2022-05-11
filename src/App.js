import { Route, Routes, matchRoutes, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { useLocalStorage } from "utils/custom-hooks";

import "./App.css";
import Logo from "components/Common/Logo/Logo";
import Header from "./components/Header/Header";
import HeaderLink from "components/Header/HeaderLink/HeaderLink";
import ThemeButton from "components/Common/ThemeButton/ThemeButton";
import Navbar from "components/Navbar/Navbar";

import Footer from "components/Footer/Footer";
import { routes } from "routes";
import Home from "containers/Home/Home";
import Docs from "containers/Docs/Docs";
import Examples from "containers/Examples/Examples";
import RunExample from "containers/RunExample/RunExample";
import Playground from "containers/Playground/Playground";
import Transition from "components/Common/Transition/Transition";
import FourOhFour from "components/Common/FourOhFour/FourOhFour";
import { ThemeContext } from "utils/theme-context";

function App() {
  const location = useLocation();
  const matched = matchRoutes(routes, location);

  useEffect(() => {
    document.title =
      routes.find((route) => route.path === matched?.[0].route.path)?.title ?? "Percept";
  }, [location, matched]);

  const [theme, setTheme] = useLocalStorage("percept-site-theme", "light");

  if (theme === "dark") document.documentElement.className = "dark";

  const themeChangeHandler = () => {
    document.documentElement.classList.toggle("dark");
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="App">
      <Header>
        <Header.Left>
          <Logo />
        </Header.Left>
        <Header.Right>
          <Navbar>
            <HeaderLink text="API" to="/docs" />
            <HeaderLink text="Examples" to="/examples" />
          </Navbar>
          <ThemeButton theme={theme} onChange={themeChangeHandler} />
        </Header.Right>
      </Header>
      <main className="content-body">
        <ThemeContext.Provider value={theme}>
          <Routes location={location}>
            <Route path="/" element={<Transition component={Home} />} />
            <Route path="/docs" element={<Transition component={Docs} />} />
            <Route path="/examples" element={<Transition component={Examples} />} />
            <Route path="/examples/:name" element={<Transition component={RunExample} />} />
            <Route path="/playground" element={<Transition component={Playground} />} />
            <Route path="*" element={<FourOhFour />} />
          </Routes>
        </ThemeContext.Provider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
