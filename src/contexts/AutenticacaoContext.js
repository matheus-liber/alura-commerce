import { createContext, useState } from "react";

export const AutenticacaoContext = createContext({})

export function AutenticacaoProvider( {children} ) {
    const [usuario, setUsuario] = useState({})
    
    function login(email, senha) {
        if(email === 'matheus@email.com' && senha === '777') {
            setUsuario({
                nome: "Matheus",
                email: 'matheus@email.com',
                endereco: 'Rua Maria Maura Bezerra, 23',
                telefone: '(84) 9 9999-9999 '
            })
            return 'ok'
        } else {
            return 'Email ou senha incorretos'
        }
    }

    return (
        <AutenticacaoContext.Provider value={{
            usuario,
            login
        }}>
            {children}
        </AutenticacaoContext.Provider>
    )
}