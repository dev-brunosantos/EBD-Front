"use client"

import { Header } from "@/src/components/Menu/Header";
import { NavComponent } from "@/src/components/Menu/Nav";
import { useState } from "react";

export default function LayoutPages({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [abrir, setAbrir] = useState(false)

    function abrirMenu() {
        setAbrir(!abrir)
    }

    function fecharMenu() {
        if (abrir) { setAbrir(false) }
    }

    return (
        <>
            <Header abrirMenu={abrirMenu} />
            <NavComponent abrir={abrir} linkClicado={fecharMenu} />
            {children}
        </>
    );
}