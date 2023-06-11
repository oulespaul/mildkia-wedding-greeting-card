"use client";

import { useState, useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import Swal from "sweetalert2";
import Image from "next/image";

import ColorButton from "./ColorButton";

const colorButtons = ["#ffb963", "#6399e3", "#e67c64", "#7ee89e"];

const GreetingCard = () => {
  const [penColor, setPenColor] = useState("#ffb963");

  const onChangePenColorhandler = (color) => setPenColor(color);

  const canvasRef = useRef(null);

  const styles = {};

  const saveImage = async (base64Image) => {
    try {
      const response = await fetch("/api/images", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: base64Image }),
      });

      if (response.status === 200) {
        Swal.fire({
          title: "ขอบคุณสำหรับคำอวยพร",
          showDenyButton: true,
          showCancelButton: false,
          confirmButtonText: "บันทึก",
          denyButtonText: `ไม่บันทึก`,
          denyButtonColor: "#FF6961",
          confirmButtonColor: "#C1D0E5",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            const link = document.createElement("a");

            link.href = base64Image;
            link.download = "mildkia-wedding-greeting-card.png";
            link.click();
          }
        });
      }
    } catch (error) {
      console.log("da: error", error);
    }
  };

  const onExportImageHandler = () => {
    canvasRef.current
      .exportImage("png")
      .then(async (data) => {
        await saveImage(data);

        canvasRef.current.clearCanvas();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container lg:px-56">
      <div className="flex w-full justify-center bg-[#FDF6EB] p-4">
        <Image
          src="/icons/mk-icon-card.png"
          alt="logo"
          width={80}
          height={80}
        />
      </div>

      <div id="contCanvasLogo" className="flex rounded-xl shadow-xl h-[65vh]">
        <ReactSketchCanvas
          ref={canvasRef}
          style={styles}
          strokeWidth={3}
          strokeColor={penColor}
          width="100%"
          height="100%"
          canvasColor="#FEF7EC"
          exportWithBackgroundImage
        />
      </div>

      <div className="flex p-4 mt-4 justify-between flex-col md:flex-row">
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

        <div className="flex flex-row justify-end mt-4 md:mt-0">
          <button
            className="rounded-full h-10 shadow-sm bg-blue-100 mr-2 mb-2 text-gray-500 px-4 hover:border-4 hover:border-gray-300"
            onClick={() => canvasRef.current.clearCanvas()}
          >
            Clear
          </button>

          <button
            className="rounded-full h-10 shadow-sm bg-yellow-200 text-gray-500 px-4 hover:border-4 hover:border-gray-300"
            onClick={onExportImageHandler}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default GreetingCard;
