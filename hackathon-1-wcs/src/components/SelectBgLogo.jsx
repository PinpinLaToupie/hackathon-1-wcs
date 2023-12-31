import { useEffect, useRef, useState } from "react";
import Konva from "konva";

import "./selectBgLogo.css";

const motifs = [
  "/src/assets/motifs/50.png",
  "/src/assets/motifs/dauphin.png",
  "/src/assets/motifs/dino.png",
  "/src/assets/motifs/fish.png",
  "/src/assets/motifs/flamanRose.png",
  "/src/assets/motifs/hamster.png",
  "/src/assets/motifs/hang_santa.png",
  "/src/assets/motifs/hat-01.png",
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
  "/src/assets/motifs/Dog.png",
  "/src/assets/motifs/Alien.png",
  "/src/assets/motifs/COD.png",
  "/src/assets/motifs/Singe.png",
  "/src/assets/motifs/Punaise.png",
  "/src/assets/motifs/Punaiserun.png",
  "/src/assets/motifs/Blobfish.png",
  "/src/assets/motifs/Benoit.png",
  "/src/assets/motifs/AnthoMalade.png",
  "/src/assets/motifs/BaptisteBlob.png",
  "/src/assets/motifs/BenoitScare.png",
  "/src/assets/motifs/Christopher.png",
];

const motifPulls = [
  "/laine-pull.png",
  "/pull1.1.png",
  "/pull2.2.png",
  "/pull3.3.png",
  "/pull4.4.png",
  "/pull5.5.png",
  "/pull6.6.png",
  "/pull7.7.png",
];

const SweatCustom = ({ selectedImage, selectedPull }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const imageObj = new Image();
    const pullImageObj = new Image();

    const loadImages = async () => {
      await new Promise((resolve, reject) => {
        imageObj.onload = resolve;
        imageObj.onerror = reject;
        imageObj.src = selectedImage;
      });

      await new Promise((resolve, reject) => {
        pullImageObj.onload = resolve;
        pullImageObj.onerror = reject;
        pullImageObj.src = selectedPull;
      });

      drawImages(imageObj, pullImageObj, width, height);
    };

    loadImages();
  }, [containerRef, selectedImage, selectedPull]);

  const drawImages = (imageObj, pullImageObj, width, height) => {
    const stage = new Konva.Stage({
      container: containerRef.current,
      width: 1850,
      height: 500,
    });

    const layer = new Konva.Layer();

    const logoImg = new Konva.Image({
      image: imageObj,
      x: stage.width() / 2 - 200 / 2 + 220,
      y: stage.height() / 2 - 137 / 2 - 30,
      width: 230,
      height: 190,
      draggable: true,
    });

    logoImg.on("mouseover", function () {
      document.body.style.cursor = "pointer";
    });

    logoImg.on("mouseout", function () {
      document.body.style.cursor = "default";
    });

    const pullImg = new Konva.Image({
      image: pullImageObj,
      x: pullImageObj.src.includes("/laine-pull.png")
        ? stage.width() / 2 - 530 / 2 + 50
        : stage.width() / 2 - 170 / 2,
      y: pullImageObj.src.includes("/laine-pull.png")
        ? stage.height() / 2 - 780 / 2 + 50
        : stage.height() / 2 - 550 / 2,
      width: pullImageObj.src.includes("/laine-pull.png") ? 840 : 600,
      height: pullImageObj.src.includes("/laine-pull.png") ? 680 : 540,
    });

    layer.add(pullImg);
    layer.add(logoImg);

    stage.add(layer);
  };

  return <div className="divfdp" ref={containerRef}></div>;
};

const SelectBgLogo = () => {
  const [selectedImage, setSelectedImage] = useState(
    "/src/assets/motifs/50.png"
  );

  const [selectedPull, setSelectedPull] = useState("/laine-pull.png");

  return (
    <>
      <div className="Container">
        <h1 className="textSelector">Make your jumper !</h1>
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
        <SweatCustom
          selectedImage={selectedImage}
          selectedPull={selectedPull}
        />
      </div>

      <div className="img-selector">
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
      <div className="achat">
        <button className="achat-btn" type="button">
          Add to cart
        </button>
      </div>
    </>
  );
};

export default SelectBgLogo;
