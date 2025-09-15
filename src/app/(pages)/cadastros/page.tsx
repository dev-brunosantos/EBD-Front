import { CardMenu } from "@/src/components/Cards/CardMenu";
import { Tela } from "@/src/components/Tela";

export default function Cadastros() {
    return (
        <Tela centralilzar>
            <div className="w-[100%] h-auto py-4 flex flex-wrap items-center justify-evenly">
                <CardMenu link="/cadastros/alunos" titulo="Alunos" />
                <CardMenu link="/cadastros/responsavel" titulo="Responsáveis" />
            </div>
        </Tela>
    )
}