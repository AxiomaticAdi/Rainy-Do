import PrimaryLauncherButton from "./PrimaryLauncherButton";

interface BackgroundSwapProps {
    onToggle: () => void;
}

export default function BackgroundSwap({ onToggle }: BackgroundSwapProps) {
    return (
        <div onClick={onToggle}>
            <PrimaryLauncherButton
                iconSrc="/video-swap-camera.svg"
                iconAlt="switch background"
            />
        </div>
    );
}
