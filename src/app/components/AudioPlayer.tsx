import Image from "next/image";
import PrimaryLauncherButton from "./PrimaryLauncherButton";

export default function AudioPlayer() {
    return (
        <div>
            <PrimaryLauncherButton
                iconSrc="/button-play.svg"
                iconAlt="play audio"
            />
        </div>
    );
}
