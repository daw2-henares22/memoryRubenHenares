import { createContext, useContext, useState } from "react"

// Creamos el contexto fuera del componente para que no se vuelva a crear en cada renderizado
const ClicsContext = createContext();

export function Context(){

    const ClicsProvider = ({ children }) => {
        const [totalClics, setTotalClics] = useState(0);

        const incrementarClics = () =>{
            setTotalClics(totalClics + 1);
        }

        return(
            <ClicsContext.Provider value = {{ totalClics, incrementarClics }}>
                {children}
            </ClicsContext.Provider>
        )
    }
    // Hook personalizado para acceder al contexto de los clics
    const useClicsContext = () => useContext(ClicsContext);

    // Componente que muestra el número total de clics
    const ContadorClics = () =>{
        const { totalClics } = useClicsContext();

        return(
            <div>
                <p>Total de clics: {totalClics}</p>
            </div>
        )
    }
    return { ClicsProvider, ContadorClics}
}