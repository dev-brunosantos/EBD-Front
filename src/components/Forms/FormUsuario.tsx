import { InputComponent } from "../Inputs";
import { TelaContainer } from "../Tela";

export interface FormUsuarioProps {
    tipoUsuario: string;
}

export const FormUsuario = ({ tipoUsuario }: FormUsuarioProps) => {
    if (tipoUsuario == "alunos") {
        return (
            <div className="w-full my-[-50px]">
                <TelaContainer>
                    <InputComponent
                        placeholder="Nome do aluno"
                    />
                    <InputComponent
                        placeholder="Sobrenome do aluno"
                    />
                    <InputComponent
                        placeholder="Nome do repsonsável do aluno"
                    />
                    <InputComponent
                        placeholder="Idade do aluno"
                        type="number"
                    />
                    <InputComponent
                        placeholder="Data de nascimento do aluno"
                        type="date"
                    />
                </TelaContainer>
            </div>
        )
    }

    return (
        <div className="w-full">
            <TelaContainer>
                <InputComponent
                    placeholder="Digite o nome do responsável do aluno"
                />
                <InputComponent
                    placeholder="Digite o nome do aluno"
                />
                <InputComponent
                    placeholder="Digite o numero de contato"
                    type="tel"
                />
            </TelaContainer>
        </div>
    )
}