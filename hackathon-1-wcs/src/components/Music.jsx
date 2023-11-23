import useSound from "use-sound";
import react from "react";
import Sound from "../assets/MariaCarrey.mp3";
import speack from "../assets/Speaker_Icon.svg";
import mute from "../assets/Mute_Icon.svg";

let src = mute;

function Playginmusic() {
  const [isPlaying, setIsPLaying] = react.useState(false);
  const [play, { stop }] = useSound(Sound, { volume: 0.2 });
  const lunchMusic = () => {
    setIsPLaying(!isPlaying);
    if (isPlaying === false) {
      play();
      src = speack;
    } else {
      stop();
      src = mute;
    }
  };

  return (
    <div>
      <img
        src="./asset/son.png"
        id="music"
        onClick={() => {
          lunchMusic();
        }}
      />
      <img src={src} alt="speacker" className="w-16 pr-3 self-center" />
    </div>
  );
}
export default Playginmusic;
