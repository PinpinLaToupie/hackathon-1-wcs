import { useEffect, useRef, useState } from "react";
import Konva from "konva";

const motifs = [
  "/src/assets/motifs/50.png",
  "/src/assets/motifs/dauphin.png",
  "/src/assets/motifs/dino.png",
  "/src/assets/motifs/fish.png",
  "/src/assets/motifs/flamanRose.png",
  "/src/assets/motifs/galaxy_bg.png",
  "/src/assets/motifs/hamster.png",
  "/src/assets/motifs/hang_santa.png",
  "/src/assets/motifs/hat-01.png",
  "/src/assets/motifs/hat-02.png",
  "/src/assets/motifs/hat-03.png",
  "/src/assets/motifs/hat.png",
  "/src/assets/motifs/loup.png",
  "/src/assets/motifs/panda.png",
  "/src/assets/motifs/peroquet.png",
  "/src/assets/motifs/pig.png",
  "/src/assets/motifs/pizza1.png",
  "/src/assets/motifs/pizza3.png",
  "/src/assets/motifs/rainbow1.png",
  "/src/assets/motifs/rainbow2.png",
  "/src/assets/motifs/reinder.png",
  "/src/assets/motifs/supermanSanta.png",
  "/src/assets/motifs/vache.png",
];

const motifPulls = [
  "/pull1.1.png",
  "/pull2.2.png",
  "/pull3.3.png",
  "/pull4.4.png",
  "/pull5.5.png",
  "/pull6.6.png",
];

const SweatCustom = ({ selectedImage }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const imageObj = new Image();
    imageObj.onload = function () {
      drawImage(imageObj, width, height);
    };

    imageObj.src = selectedImage;
  }, [containerRef, selectedImage]);

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

  return <div ref={containerRef}></div>;
};

const SelectBgLogo = () => {
  const [selectedImage, setSelectedImage] = useState(
    "/src/assets/motifs/50.png"
  );
  const [selectedPull, setSelectedPull] = useState("/pull1.1.png");

  return (
    <div>
      <SweatCustom selectedImage={selectedImage} selectedPull={selectedPull} />
      <div className="Container">
        <div className="pulls-container">
          {motifPulls.map((pullPath, index) => (
            <img
              key={index}
              src={pullPath}
              alt={`Pull ${index + 1}`}
              className={
                selectedPull === pullPath ? "selected-pull pull" : "pull"
              }
              onClick={() => setSelectedPull(pullPath)}
            />
          ))}
        </div>
        <img className="pullSelector" src={selectedPull} alt="Selected Pull" />
        <p className="textSelector">Choose a logo !:</p>
        {motifs.map((imagePath, index) => (
          <img
            key={index}
            src={imagePath}
            alt={`Image ${index + 1}`}
            className={selectedImage === imagePath ? "selected motif" : "motif"}
            onClick={() => setSelectedImage(imagePath)}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectBgLogo;
