//Dependencies
import React, { useState } from 'react';
  
//CSS
import './App.css';
import './style/style.scss';

//Components
import Header from './container/Header';
import Footer from './container/Footer';

import AppRouter from "./route/appRouter";
const App = () => {
  const [selectedContent, setSelectedContent] = useState('pageOne');

  const handleChange = (value) => {
    setSelectedContent(value)
  }

  return (
    <div className="app">
      <Header onSelect={handleChange} />
      <main className="main-content">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
