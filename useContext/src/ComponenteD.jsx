import { useContext } from "react";
import { usuarioContexto } from "./ComponenteA";

function ComponenteD() {

    const valor = useContext(usuarioContexto);

    return (
        <div className="caixa">
            <h1>Componente D</h1>
            <h2>{`Tchau ${valor}`}</h2>
        </div>
    );
}

export default ComponenteD