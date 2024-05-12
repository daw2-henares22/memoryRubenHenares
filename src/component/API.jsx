import { useEffect, useState } from "react";
import { Tarjeta } from "./Tarjeta";
import { useNavigate } from "react-router-dom";

export const Api=({token})=>{



    const [tarjetas, setTarjetas] = useState([]);// [] como dependencia para asegurarnos de que este efecto se ejecute solo una vez.

    useEffect(() => {

        const obtenerTarjetas = async () => {
            const tarjetasAleatorias = await obtenerTarjetaCantidadTarjeta(9);

            const tarjetasDuplicadas = [...tarjetasAleatorias, ...tarjetasAleatorias]; // ... sirve para duplicar las 9 tarjetas
        
            const tarjetasDesordenadas = desordenarTarjetas(tarjetasDuplicadas);
        
            setTarjetas(tarjetasDesordenadas);
        }

        obtenerTarjetas();

    }, []) // La dependencia vacía asegura que este efecto se ejecute solo una vez al montar el componente
    
    // funcion para obtener las tarjetas de los pokemons y de manera aleatoria
    const obtenerTarjetaCantidadTarjeta = async (cantidad) => {
        const tarjetasAleatorias = [];
        for (let i = 0; i < cantidad; i++){
            const id = Math.floor(Math.random() * 898) + 1;
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            const tarjeta = {
                id: data.id,
                nombre: data.name,
                imagenCara: data.sprites.front_default,
            }
            tarjetasAleatorias.push(tarjeta);
        }
        return tarjetasAleatorias;

    };


    //     // tarjetas aleatorias
    //     const cantidadPokemon = async () => {
    //         const cantidad = [];
    //         for (let i = 0; i < 9; i++){
    //             const pokemon = await obtenerPokemon();
    //             cantidad.push(pokemon);
    //         }
    //         setPokemons(cantidad)
    //     }

    //     cantidadPokemon();
    // },[])

    const desordenarTarjetas = (tarjetas) => {
        for(let i = tarjetas.length - 1; i>0; i--){
            const idj= Math.floor(Math.random()*(i + 1));
            [tarjetas[i], tarjetas[idj]] = [tarjetas[idj], tarjetas[i]];
        }
        return tarjetas;
    }

    //Cuando el token sea eliminado se redirige a la página principal

    let navigate = useNavigate()

    function handleLogout(){
        sessionStorage.removeItem('token')
        navigate('/')
    }
    
    return (
        <>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
        Welcome {token.user.user_metadata.name}
      </h2>
      <button className="flex justify-start rounded-md bg-indigo-600 dark:bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 dark:hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleLogout}>Logout</button>
        <div className="pl-3 grid grid-cols-5 gap-3">
            {tarjetas.map((tarjeta, index) => (// no pongo tarjeta.id porque sino duplico las tarjetas al tener dos copias de la misma con el mismo "id"
                <Tarjeta
                    key={index}
                    nombre={tarjeta.nombre}
                    imagenCara={tarjeta.imagenCara}
                />
            ))}
        </div>
        </>
    )
}