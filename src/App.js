import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import NavigationBar from "./components/navigationBar";

function App() {
  return (
    <div>
      <div className="container-fluid">
        <div className="bg-info text-white text-center p-2" to="/">
          <h4>Gary Trucking LLC</h4>
        </div>
        <NavigationBar />
      </div>
    </div>
  );
}

export default App;
