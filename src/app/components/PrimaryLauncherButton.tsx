import Image from "next/image";

interface PrimaryLauncherButtonProps {
    iconSrc: string;
    iconAlt: string;
}

export default function PrimaryLauncherButton({
    iconSrc,
    iconAlt,
}: PrimaryLauncherButtonProps) {
    return (
        <button className="btn btn-ghost btn-circle flex h-24 w-24 items-center justify-center">
            <Image src={iconSrc} alt={iconAlt} width="50" height="50" />
        </button>
    );
}
