import { BtnIcon } from "@/src/components/Buttons/BtnIcon";
import { FaBars } from 'react-icons/fa';

export interface HeaderProps {
    abrirMenu: () => void;
}

export const Header = ({ abrirMenu }:HeaderProps) => {
    return (
        <div className="w-[100%] h-[55px] pl-4 flex items-center justify-between absolute top-0">
            <p>EBD Infantil</p>
            <div>
                <BtnIcon onClick={abrirMenu}>
                    <FaBars size={35} />
                </BtnIcon>
            </div>
        </div>
    )
}