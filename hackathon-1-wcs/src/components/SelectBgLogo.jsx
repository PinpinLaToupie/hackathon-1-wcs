import { useState } from "react";

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

function SelectBgLogo({ onLogoSelect }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (imagePath) => {
    setSelectedImage(imagePath);
    onLogoSelect(imagePath);
  };

  return (
    <div>
      <p>Image sélectionnée : {selectedImage}</p>
      <div>
        {motifs.map((imagePath, index) => (
          <img
            key={index}
            src={imagePath}
            alt={`Image ${index + 1}`}
            style={{
              width: "100px",
              height: "100px",
              marginRight: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleImageSelect(imagePath)}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectBgLogo;
