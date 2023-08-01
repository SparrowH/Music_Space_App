import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./Homepage";

function App() {
  return (
    <div className="center">
      <Homepage/>
    </div>
  );
}

const appDiv = document.getElementById('app');
ReactDOM.render(<App />, appDiv);
