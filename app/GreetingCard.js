"use client";

import { useState, useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import ColorButton from "./ColorButton";
import Image from "next/image";

const colorButtons = ["#ffb963", "#6399e3", "#e67c64", "#7ee89e"];

const GreetingCard = () => {
  const [penColor, setPenColor] = useState("#ffb963");

  const onChangePenColorhandler = (color) => setPenColor(color);

  const canvasRef = useRef(null);

  const styles = {
    borderRadius: "1rem",
  };

  const onExportImageHandler = () => {
    const link = document.createElement("a");

    canvasRef.current
      .exportImage("png")
      .then((data) => {
        link.href = data;
        link.download = "mildkia-wedding-greeting-card.png";
        link.click();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container lg:px-56">
      <div className="flex w-full justify-center bg-[#FDF6EB]">
        <Image src="/mk-logo.png" alt="logo" width={100} height={100} />
      </div>

      <div id="contCanvasLogo" className="flex rounded-xl shadow-xl h-[70vh]">
        <ReactSketchCanvas
          ref={canvasRef}
          style={styles}
          strokeWidth={4}
          strokeColor={penColor}
          width="100%"
          height="100%"
          canvasColor="#FEF7EC"
          exportWithBackgroundImage
        />
      </div>

      <div className="flex p-4 mt-4 justify-between">
        <div className="flex gap-2">
          {colorButtons.map((color, index) => (
            <ColorButton
              color={color}
              onChange={onChangePenColorhandler}
              isActive={penColor === color}
              key={`${index}-${color}`}
            />
          ))}
        </div>

        <div className="flex">
          <button
            className="rounded-full h-full shadow-sm bg-blue-100 mr-2 text-gray-500 px-4 hover:border-4 hover:border-gray-300"
            onClick={() => canvasRef.current.clearCanvas()}
          >
            Clear
          </button>

          <button
            className="rounded-full h-full shadow-sm bg-yellow-200 text-gray-500 px-4 hover:border-4 hover:border-gray-300"
            onClick={onExportImageHandler}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default GreetingCard;
