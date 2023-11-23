import { useEffect, useRef } from "react";
import Konva from "konva";

const SweatCustom = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const imageObj = new Image();
    imageObj.onload = function () {
      drawImage(imageObj, width, height);
    };

    imageObj.src = "/boule-icon.png";
  }, [containerRef]);

  const drawImage = (imageObj, width, height) => {
    const stage = new Konva.Stage({
      container: containerRef.current,
      width: width,
      height: height,
    });

    const layer = new Konva.Layer();
    const darthVaderImg = new Konva.Image({
      image: imageObj,
      x: stage.width() / 2 - 200 / 2,
      y: stage.height() / 2 - 137 / 2,
      width: 200,
      height: 137,
      draggable: true,
    });

    darthVaderImg.on("mouseover", function () {
      document.body.style.cursor = "pointer";
    });

    darthVaderImg.on("mouseout", function () {
      document.body.style.cursor = "default";
    });

    layer.add(darthVaderImg);
    stage.add(layer);
  };

  return (
    <div>
      <div className="sweat-custom-container" ref={containerRef}></div>
    </div>
  );
};

export default SweatCustom;
