"use client";

import { useState } from "react";
import { useDraw } from "../hooks/useDraw";
import { ChromePicker } from "react-color";

const GreetingCard = ({}) => {
  const [color, setColor] = useState("#000");
  const { canvasRef, onMouseDown, clear } = useDraw(drawLine);

  function drawLine({ prevPoint, currentPoint, ctx }) {
    const { x: currX, y: currY } = currentPoint;
    const lineColor = color;
    const lineWidth = 5;

    let startPoint = prevPoint ?? currentPoint;
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currX, currY);
    ctx.stroke();

    ctx.fillStyle = lineColor;
    ctx.beginPath();
    ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <canvas
        ref={canvasRef}
        onMouseDown={onMouseDown}
        width={400}
        height={400}
        className="border border-black rounded-md"
      />
      <ChromePicker color={color} onChange={(e) => setColor(e.hex)} />
      <button
        type="button"
        className="p-2 rounded-md border border-black"
        onClick={clear}
      >
        Clear
      </button>
    </div>
  );
};

export default GreetingCard;
