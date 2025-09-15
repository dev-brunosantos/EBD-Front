"use client";

import { FaArrowLeft } from "react-icons/fa";
import { BtnComponent } from "@/src/components/Buttons"
import { FormUsuario } from "@/src/components/Forms/FormUsuario"
import { Tela, TelaContainer } from "@/src/components/Tela"
import { BtnIcon } from "@/src/components/Buttons/BtnIcon";
import { useRouter } from "next/navigation";

interface TipoUsuario {
    params: { tipo: string }
}

export default function CadastroUsuario({ params }: TipoUsuario) {

    const route = useRouter();

    return (
        <Tela>
            <div className="absolute top-[8%] left-4 border-1 rounded-[50%]">
                <BtnIcon onClick={() => route.back()}>
                    <FaArrowLeft size={25} />
                </BtnIcon>
            </div>

            <TelaContainer>
                <h1 className="text-[40px] text-center font-bold">
                    {
                        params.tipo.toLowerCase() == "alunos" ? "Cadastro de Alunos" : "Cadastro de Responsáveis"
                    }
                </h1>
            </TelaContainer>

            <FormUsuario tipoUsuario={params.tipo.toLowerCase()} />

            <TelaContainer>
                <BtnComponent titulo="Cadastrar" />
            </TelaContainer>
        </Tela>
    )
}