import { useRouter } from "next/navigation";
import { Links } from "./Links"

export interface NavComponentProps {
    abrir: boolean;
    linkClicado: () => void;
}

export const NavComponent = ({ abrir, linkClicado }: NavComponentProps) => {

    const route = useRouter();

    // function fecharMenu() {
    //     if(abrir) { abrir = false }
    //     console.log(abrir)
    // }

    return (
        <header
            className="border-1 h-[80vh] flex flex-col fixed top-[55px] left-0 overflow-hidden transition-all bg-black z-50"
            style={{ width: abrir ? '70vw' : '0vw' }}
        >
            <div className="w-[100%] h-[100px] border-1 pl-4 flex flex-col justify-center">
                <p>Olá Bruno Santos</p>
            </div>

            <nav className="h-[90%]">
                <ul className="min-h-[200px] pl-4 flex flex-col justify-evenly">
                    <Links link="/home" titulo="Home" onClick={linkClicado} />
                    <Links link="/cadastros" titulo="Cadastros" onClick={linkClicado} />
                    <Links link="/pontuacao" titulo="Pontuações" onClick={linkClicado} />
                </ul>
            </nav>

            <button className="w-[90%] h-[55px] m-auto rounded-md mb-4 font-bold border-1" onClick={() => { route.replace('/') }}>
                Sair
            </button>
        </header>
    )
}