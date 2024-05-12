// export function Tarjetacopy({personajesMarvel, personajesPokemon}){
//     const {imagenMarvel, nombreMarvel} = personajesMarvel
//     const {imagenPokemon, nombrePokemon} = personajesPokemon
//     return(
//         <div>
//             <div class="max-w-sm rounded overflow-hidden shadow-lg">
//                 <img class="w-full" src={`${capitanAmerica.jpg}`} alt="Sunset in the mountains"></img>
//                 <div>{nombreMarvel}</div>
//             </div>
//             <div class="max-w-sm rounded overflow-hidden shadow-lg">
//                 <img class="w-full" src={imagenPokemon} alt="Sunset in the mountains"></img>
//                 <div>{nombrePokemon}</div>
//             </div>
//         </div>
//     )
// }

import { useState } from "react"



export function Tarjetacopy({imagen, nombre}){
    const [contador, setContador] = useState(0);
    
    
    
    const tarjetaClick = () => {
        setContador(contador + 1);
    }
    return(
        <>
        <div onClick={tarjetaClick} className=" bg-slate-200 rounded  w-[150px] h-[220px] p-2 shadow-lg text-center">
            <p className="font-bold dark:text-black">Contador de clics: {contador}</p>
            <img className="h-[150px]" src={imagen} alt={nombre} />
            <h2 className="pt-1">{nombre}</h2>
        </div>
        </>  
    )
}