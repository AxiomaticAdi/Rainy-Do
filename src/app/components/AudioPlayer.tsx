"use client";

import { useState, useEffect } from "react";

import PrimaryLauncherButton from "./PrimaryLauncherButton";
import { Slider } from "@/app/components/ui/slider";

let rainsounds: HTMLAudioElement;

const AudioPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(50);

    useEffect(() => {
        // This will ensure the Audio object is created on the client side
        rainsounds = new Audio("/RainSounds.mp3");
        rainsounds.volume = 0.5;
    }, []);

    const toggleAudio = (): void => {
        if (rainsounds) {
            isPlaying ? rainsounds.pause() : rainsounds.play();
            setIsPlaying(!isPlaying);
        }
    };

    const changeVolume = (value: number[]): void => {
        const newVolume = value[0];
        setVolume(newVolume);
        rainsounds.volume = newVolume;
    };

    return (
        <div>
            <Slider
                defaultValue={[0.5]}
                min={0}
                max={1}
                step={0.1}
                onValueChange={changeVolume}
            />
            <div onClick={toggleAudio}>
                <PrimaryLauncherButton
                    iconSrc={
                        isPlaying ? "/button-pause.svg" : "/button-play.svg"
                    }
                    iconAlt="play audio"
                />
            </div>
        </div>
    );
};

export default AudioPlayer;
