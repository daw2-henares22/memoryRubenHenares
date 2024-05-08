import { Link } from "react-router-dom";

export function Header(){
    return(
        <ul className="p-2 flex gap-3 text-blue-200">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/grupoTarjetasCopy">Pokemons Memory</Link></li>
            <li><Link to="/grupoTarjetasCopy">Marvel Memory</Link></li>
            <li><Link to="/about">A cerca de</Link></li>
            <li><Link to="/context">Context</Link></li>
            <li><Link to="/api">Api</Link></li>
        </ul>
    )
}