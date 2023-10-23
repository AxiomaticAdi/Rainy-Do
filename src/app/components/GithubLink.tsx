import Image from "next/image";

interface GithubLinkProps {
    source: string;
    size: number;
}

export default function GithubLink({ source, size }: GithubLinkProps) {
    return (
        <a href="https://github.com/AxiomaticAdi/scryfall-image-downloader">
            <Image
                src={source}
                height={size}
                width={size}
                title="my github"
                alt="my github"
            />
        </a>
    );
}
