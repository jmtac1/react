import { useContext } from "react";
import { usuarioContexto } from "./ComponenteA";
import ComponenteD from "./ComponenteD";

function ComponenteC() {

    const valor = useContext(usuarioContexto);

    return (
        <div className="caixa">
            <h1>Componente C</h1>
            <h2>{`Até mais ${valor}`}</h2>
            <ComponenteD />
        </div>
    );
}

export default ComponenteC