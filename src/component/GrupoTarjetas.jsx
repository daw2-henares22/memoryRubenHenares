import { Tarjetacopy } from "./Tarjetacopy";
import { arrayPersonajes } from "./arrayPersonajes";

export function GrupoTarjetas(){
    return(
      <div className="pl-3 grid grid-cols-5 gap-3">
        {arrayPersonajes.map((personaje ) => (
          <Tarjetacopy 
          key={personaje.id}
          nombre={personaje.nombre}
          imagen={personaje.imagen} />// envuelve la función para que pueda ser llamada correctamente
        ))}
      </div>

      // <div className="conatiner mx-auto">
      //   <Tarjeta nombre="Ejemplo de Tarjeta" imagen="https://static.wikia.nocookie.net/disney/images/f/fa/Captain-America-AOU-Render.png"></Tarjeta>
      // </div>
    )
}