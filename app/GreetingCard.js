"use client";

import React from "react";
import { fabric } from "fabric";

const GreetingCard = () => {
  const fabricRef = React.useRef(null);
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    console.log(document.getElementById("contCanvasLogo").clientHeight)
    console.log(document.getElementById("contCanvasLogo").clientWidth)
    const initFabric = () => {
      fabricRef.current = new fabric.Canvas(canvasRef.current, {
        isDrawingMode: true,
      });
      fabricRef.current.setHeight(
        document.getElementById("contCanvasLogo").clientHeight - 200
      );
      fabricRef.current.setWidth(
        document.getElementById("contCanvasLogo").clientWidth - 70
      );
    };

    const disposeFabric = () => {
      fabricRef.current.dispose();
    };

    initFabric();

    return () => {
      disposeFabric();
    };
  }, []);

  return <canvas ref={canvasRef} className="border-2 border-gray-400 border-dotted" />;
};

export default GreetingCard;
