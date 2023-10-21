import PrimaryLauncherButton from "./PrimaryLauncherButton";

interface TaskLauncherProps {
    onToggle: () => void;
}

export default function TaskLauncher({ onToggle }: TaskLauncherProps) {
    return (
        <div onClick={onToggle}>
            <PrimaryLauncherButton
                iconSrc={"/clipboard.svg"}
                iconAlt={"Launch to-do tracker"}
            />
        </div>
    );
}
