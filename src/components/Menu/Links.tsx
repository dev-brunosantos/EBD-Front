import Link from "next/link"

export interface LinkProps {
    link?: string;
    titulo: string;
    onClick:  () => void;
}

export const Links = ({ link, titulo, onClick }: LinkProps) => {
    return (
        <Link href={`${link}`} onClick={onClick}>{titulo}</Link>
    )
}