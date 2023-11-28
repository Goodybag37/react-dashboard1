// import { useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Sidebar from "./Sidebar";
import './App.css';

function App() {
  return (
    <div className="grid-container">
    <Header />
    <Sidebar />
    <Home />
      
    </div>
  );
}

export default App;
