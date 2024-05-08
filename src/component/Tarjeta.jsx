import { useEffect, useState } from "react"
import dorsoTarjetaPokemon from "../../public/dorsoTarjetaPokemon.jpg"

export function Tarjeta({imagenCara, nombre}){
    const [mostrarCara, setMostrarCara] = useState(false);
    // const [animacion, setAnimacion] = useState(false);
    
    useEffect(() => {
        let timeout;
        if(mostrarCara) {
            timeout = setTimeout(() => {
                setMostrarCara(false);
                // setAnimacion(false); // Desactivar la animación cuando se oculta la cara
            }, 1350);
        }
        return () => clearTimeout(timeout);
    }, [mostrarCara]);
    
    
    const tarjetaClick = () => {
        setMostrarCara(!mostrarCara);
        // setAnimacion(true); // Activar la animación cuando se hace clic en la tarjeta
    }
    return(

        // <div onClick={tarjetaClick} className=" bg-blue-800 rounded  w-[150px] h-[220px] p-2 shadow-lg text-center text-orange-200">
        //     {/* <p>Contador de clics: {mostrarCara ? 1 : 0}</p> */}
        //     {mostrarCara ? (
        //         <>
        //             <img className="w-full" src={imagenCara} alt={nombre} />
        //             <h2 className="pt-1">{nombre}</h2>
        //         </>
        //     ) : (
        //         <img className="w-full" src={dorsoTarjetaPokemon}/>
        //     )}
        // </div>


        <div onClick={tarjetaClick} className={`place-content-center transition ease-in delay-150 hover:scale-105 hover:bg-indigo-500 duration-300 bg-blue-800 rounded w-[150px] h-[217px] p-2 shadow-lg text-center text-orange-200
        ${mostrarCara ? "animate-pulse" : ""}`}>
            {/* <p>Contador de clics: {mostrarCara ? 1 : 0}</p> */}
            {mostrarCara ? (
                <>
                    <img className="w-full" src={imagenCara} alt={nombre} />
                    <h2 className="pt-1">{nombre}</h2>
                </>
            ) : (
                <img className={``} src={dorsoTarjetaPokemon} alt="dorsoTarjetaPokemon"/>
                // <img className={`${animacion ? "animate-ping" : ""}`} src={dorsoTarjetaPokemon} alt="dorsoTarjetaPokemon"/>
            )}
        </div>
    )
}