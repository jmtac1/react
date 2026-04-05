import { useState, createContext } from "react";
import ComponenteB from "./ComponenteB";

export const usuarioContexto = createContext();

function ComponenteA() {

    const [usuario, setUsuario] = useState('João');

    return (
        <div className="caixa">
            <h1>Componente A</h1>
            <h2>{`Bem Vindo ${usuario}!`}</h2>
            
            <usuarioContexto.Provider value={usuario}>
                <ComponenteB usuario={usuario}/>    
            </usuarioContexto.Provider>
        </div>
    );
}

export default ComponenteA