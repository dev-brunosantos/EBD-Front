"use client";

import { useState } from "react";
import { Tela } from "@/src/components/Tela";
import { Header } from "@/src/components/Menu/Header";
import { NavComponent } from "@/src/components/Menu/Nav";
import { CardMenu } from "@/src/components/Cards/CardMenu";

export default function Home() {

    const [abrir, setAbrir] = useState(false)

    function abrirMenu() {
        setAbrir(!abrir)
    }

    return (
        <Tela centralilzar>
            <div className="w-[100%] h-auto py-4 flex flex-wrap items-center justify-evenly">
                <CardMenu link="alunos" titulo="Alunos" />
                <CardMenu titulo="Frequência" />
                <CardMenu titulo="Pontuação" />
                <CardMenu titulo="Responsáveis" />
            </div>
        </Tela>
    )
}