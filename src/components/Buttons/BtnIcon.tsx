import { ButtonHTMLAttributes } from "react";

export interface BtnIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export const BtnIcon = ({ children, ...rest }:BtnIconProps) => {
    return(
        <button type="button" {...rest} className="h-[100%] p-2 flex items-center justify-center cursor-pointer">
            {children}
        </button>
    )
}