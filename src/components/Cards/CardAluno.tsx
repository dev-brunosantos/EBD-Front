import { CardAlunoProps } from "@/src/interfaces/IUSuarios"

interface DivContainerProps {
    tipo: string;
    dado: string | number;
}

export const DivContainer = ({ tipo, dado }: DivContainerProps) => {
    return (
        <div className="min-w-[95px] w-auto h-full mx-1 px-1 flex  flex-col items-center justify-center text-center">
            <p className="text-[12px] text-[#dadada80]">{tipo}</p>
            <p className="text-[14px]">{dado}</p>
        </div>
    )
}

export const CardAluno = ({ nome, sobrenome, responsavel, idade, dataNascimento }: CardAlunoProps) => {
    return (
        <div className="w-full h-[55px] border-b-1 border-b-[#dadada50] flex items-center overflow-x-auto">
            <DivContainer tipo="Nome" dado={nome} />
            <DivContainer tipo="Sobrenome" dado={sobrenome} />
            <DivContainer tipo="" dado={responsavel} />
            <DivContainer tipo="Idade" dado={idade} />
            <DivContainer tipo="Dt. Nasc." dado={dataNascimento} />
        </div>
    )
}