
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Tooltip toolTipText="This is a tooltip">
          <h1>Hover over me</h1>
        </Tooltip>
        <Tooltip toolTipText="This is another tooltip">
          <h2>Hover over me to see another tooltip</h2>
        </Tooltip>
    </div>
  )
}

export default App
