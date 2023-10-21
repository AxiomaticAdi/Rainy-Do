"use client";

import { useState, useEffect } from "react";
import PrimaryLauncherButton from "./PrimaryLauncherButton";

let rainsounds: HTMLAudioElement;

const AudioPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    useEffect(() => {
        // This will ensure the Audio object is created on the client side
        rainsounds = new Audio("/RainSounds.mp3");
    }, []);

    const toggleAudio = (): void => {
        if (rainsounds) {
            isPlaying ? rainsounds.pause() : rainsounds.play();
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div onClick={toggleAudio}>
            <PrimaryLauncherButton
                iconSrc={isPlaying ? "/button-pause.svg" : "/button-play.svg"}
                iconAlt="play audio"
            />
        </div>
    );
};

export default AudioPlayer;
