import { CardAluno } from "@/src/components/Cards/CardAluno";
import { Tela, TelaContainer } from "@/src/components/Tela";
import { CardAlunoProps } from "@/src/interfaces/IUSuarios";

export default function Alunos() {

    const alunosDados = [
        {
            nome: "Alexandre",
            responsavel: "Jessica Costa",
            sobrenome: "Costa",
            idade: 12,
            dataNascimaneo: "02/09/2013"
        },
        {
            nome: "Arthur",
            responsavel: "Jessica Costa",
            sobrenome: "Santos",
            idade: 12,
            dataNascimaneo: "06/10/2019"
        }
    ]

    return (
        <Tela centralilzar>
            <TelaContainer>
                <h1>Tela de Alunos</h1>
            </TelaContainer>

            <TelaContainer>
                {
                    alunosDados.map(aluno => (
                        <CardAluno
                            key={aluno.nome}
                            nome={aluno.nome}
                            sobrenome={aluno.sobrenome}
                            responsavel={aluno.responsavel}
                            idade={aluno.idade}
                            dataNascimento={aluno.dataNascimaneo}
                        />
                    ))
                }
            </TelaContainer>
        </Tela>
    )
}