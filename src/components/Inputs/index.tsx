"use client";

import { InputHTMLAttributes, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { BtnIcon } from "../Buttons/BtnIcon";

export interface InputComponentProps extends InputHTMLAttributes<HTMLInputElement> {
    isPassword?: boolean;
}

export const InputComponent = ({ isPassword, ...rest }:InputComponentProps) => {

    const [type, setType] = useState('password')
    const [icon, setIcon] = useState(<FaEyeSlash size={35} />)

    function verSenha() {
        setType(type == 'text' ? 'password' : 'text')
        setIcon(type == 'password' ? <FaEyeSlash size={35} /> : <FaEye size={35} /> )
    }

    if(isPassword) {
        return(
            <div className="w-[100%] h-[50px] border-1 rounded-md flex items-center justify-center relative">
                <input {...rest} type={type} className="w-[100%] h-[100%] px-4 outline-none" />
                <BtnIcon onClick={verSenha}>
                    {icon}
                </BtnIcon>
            </div>
        )
    }

    return(
        <div className="w-[100%] h-[50px] my-1 border-1 rounded-md flex items-center justify-center relative">
            <input type="text" {...rest} className="w-[100%] h-[100%] px-4 outline-none" />
        </div>
    )
}