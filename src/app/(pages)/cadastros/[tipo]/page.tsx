"use client";

import { use } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { BtnComponent } from "@/src/components/Buttons";
import { FormUsuario } from "@/src/components/Forms/FormUsuario";
import { Tela, TelaContainer } from "@/src/components/Tela";
import { BtnIcon } from "@/src/components/Buttons/BtnIcon";
import { useRouter } from "next/navigation";

interface CadastroUsuarioProps {
  params: Promise<{ tipo: string }>;
}

export default function CadastroUsuario({ params }: CadastroUsuarioProps) {
  const { tipo } = use(params); // 🔑 aqui "unwrap" do Promise
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
          {tipo.toLowerCase() === "alunos"
            ? "Cadastro de Alunos"
            : "Cadastro de Responsáveis"}
        </h1>
      </TelaContainer>

      <FormUsuario tipoUsuario={tipo.toLowerCase()} />

      <TelaContainer>
        <BtnComponent titulo="Cadastrar" />
      </TelaContainer>
    </Tela>
  );
}
