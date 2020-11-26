/* import React from "react";
import useMinions from "./minions.tsx";

import "./index.css";

interface Minion {
    nome: string;
    preco: number;
    img: string;
}

export default function ListaMinions(props: Minion) {
    const minions = useMinions()

    return (
        <div className="container">
            {minions.length > 0 ? (
                minions?.map((minion) => (
                    <li>
                        <img>{minion.img}</img>
                        <h3>{minion.nome}</h3>
                        <h3>{minion.preco}</h3>
                    </li>
                ))
            ) : (
                <h1>Carregando minions...</h1>
            )}
        </div>
    )
}
*/

export {}