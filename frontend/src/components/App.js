import React from "react";
import { createRoot } from "react-dom/client";
import Homepage from "./Homepage";


function App(props) {
  return (
    <div className="center">
        <Homepage/>
    </div>
  );
}

const appDiv = document.getElementById('app');
createRoot(appDiv).render(<App />);
