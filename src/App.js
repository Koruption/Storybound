// import logo from './logo.svg';
import "./App.css";

import React from "react";
import { NodeEditor } from "flume";
import config from "./config";

function App() {
  return (
    <div style={{ width: 1300, height: 650 }}>
      <NodeEditor portTypes={config.portTypes} nodeTypes={config.nodeTypes} />
    </div>
  );
}

export default App;
