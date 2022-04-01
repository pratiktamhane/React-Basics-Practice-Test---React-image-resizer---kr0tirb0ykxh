import React, { useState } from "react";
import "../styles/App.css";
import Image from "./src/image.jpeg";

const App = () => {
  const [imageToResize, setImageToResize] = useState(undefined);

  const onHeight = () => {
    setImageToResize(imageToResize);
  };
  return (
    <div id="main">
      <h2>Resized Image</h2>
      <img id="resizable-img" width="320" src={Image} />
      <div onChange={onHeight}>
        <input type="range" min={100} max={800} />
        <input type="range" min={100} max={800} />
      </div>
    </div>
  );
};

export default App;
