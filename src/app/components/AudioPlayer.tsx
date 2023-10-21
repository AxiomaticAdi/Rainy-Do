import PrimaryLauncherButton from "./PrimaryLauncherButton";
import { useState } from "react";

const rainsounds = new Audio("/RainSounds.mp3");

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAudio = () => {
        isPlaying ? rainsounds.pause() : rainsounds.play();
        setIsPlaying(!isPlaying);
    };

    return (
        <div onClick={toggleAudio}>
            <PrimaryLauncherButton
                iconSrc={isPlaying ? "/button-pause.svg" : "/button-play.svg"}
                iconAlt="play audio"
            />
        </div>
    );
}
