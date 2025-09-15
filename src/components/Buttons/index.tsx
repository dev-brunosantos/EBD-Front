import { ButtonHTMLAttributes } from "react";

export interface BtnComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    titulo: string;
}

export const BtnComponent = ({ titulo, ...rest }: BtnComponentProps) => {
    return (
        <button type="button" {...rest} className="w-[100%] h-[50px] border-1 rounded-md flex items-center justify-center relative font-bold text-[18px]">
            {titulo}
        </button>
    )
}