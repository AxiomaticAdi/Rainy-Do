import Image from "next/image";
import PrimaryLauncherButton from "./PrimaryLauncherButton";

export default function TaskLauncher() {
    return (
        <div>
            <PrimaryLauncherButton
                iconSrc={"/clipboard.svg"}
                iconAlt={"Launch to-do tracker"}
            />
        </div>
    );
}
