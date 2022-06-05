import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./Components/Add";
import List from "./Components/List";

function App() {
  return (
    <div className="App">
      <Add />
      <List />
    </div>
  );
}

export default App;
