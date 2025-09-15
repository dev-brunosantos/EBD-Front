export interface TelaProps {
    children: React.ReactNode;
    centralilzar?: boolean;
}

export const Tela = ({ children, centralilzar }: TelaProps) => {
    return (
        <div
            className="font-sans flex flex-col items-center min-h-screen p-8 pt-[90px] pb-20 gap-16 sm:p-20 overflow-hidden"
            style={{ justifyContent: centralilzar ? 'space-evenly' : 'flex-start' }}
        >
            {children}
        </div>
    )
}

export const TelaContainer = ({ children }: { children: React.ReactNode }) => {
    return (
    <div className="w-[100%] min-h-[100px] h-auto flex flex-col items-center justify-evenly ">
            {children}
        </div>
    )
}