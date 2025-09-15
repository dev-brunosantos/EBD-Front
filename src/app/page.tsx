"use client";

import { InputComponent } from "../components/Inputs";
import { BtnComponent } from "../components/Buttons";
import { Tela, TelaContainer } from "../components/Tela";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter();

  return (
    <Tela centralilzar>
      <TelaContainer>
        <h1 className="text-[40px] font-bold">EBD Infantil</h1>
      </TelaContainer>

      <TelaContainer>
        <InputComponent
          placeholder="Digite seu nome"
        />
        <InputComponent
          isPassword
          placeholder="Digite sua senha"
        />
      </TelaContainer>

      <TelaContainer>
        <BtnComponent titulo="Entrar" onClick={() => {
          router.push('/home')
        }} />
      </TelaContainer>
    </Tela>
  );
}
