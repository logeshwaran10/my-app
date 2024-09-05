//Dependencies
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Removed `Switch`

//CSS
import "./App.css";
import "./style/style.scss";

//Components
import Header from "./container/Header";
import Footer from "./container/Footer";
import AppRouter from "./route/appRouter";

const App = () => {
  const [active, setActive] = useState("pageOne");
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, []);

  const handleChange = (value) => {
    setActive(value);
  };

  return (
    <div className="app">
      <Header onSelect={handleChange} active={active} />
      <main className="main-content">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );

};

export default App;
