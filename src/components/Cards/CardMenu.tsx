export interface CardMenuProps {
    titulo: string;
    link?: string;
}

export const CardMenu = ({ titulo, link }: CardMenuProps) => {
    return (
        <div className="w-[48%] h-[150px] rounded-md flex items-center justify-center border-4 border-double my-2">
            <a href={link} className="font-bold text-[20px]">{titulo}</a>
        </div>
    )
}