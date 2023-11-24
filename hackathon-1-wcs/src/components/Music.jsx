import { useState, useEffect } from "react";

function Playginmusic() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useEffect(() => {
    const audioElement = document.getElementById("background-music");

    if (isMusicPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }

    return () => {};
  }, [isMusicPlaying]);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <div className="home-container">
      <button type="button" onClick={toggleMusic} className="music-toggle">
        {isMusicPlaying ? (
          <img src="hp-off.png" alt="Sound On" />
        ) : (
          <img src="hp-on.png" alt="Sound Off" />
        )}
      </button>
      <audio id="background-music" loop>
        <source src="./Mariah.mp3" type="audio/mpeg" />
        <track kind="captions" label="French" srcLang="fr" src="" default />
      </audio>
    </div>
  );
}

export default Playginmusic;
