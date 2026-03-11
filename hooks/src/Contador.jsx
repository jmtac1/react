import React, { useState } from "react";

function Contador() {
    const [cont, setCont] = useState(0);

    const aumentar = () => {
        setCont(cont + 1);
    };
    const diminuir = () => {
        setCont(cont - 1);
    };
    const resetar = () => {
        setCont(0);
    }

    return (
        <div>
            <p>{cont}</p>
            <button onClick={aumentar}>aumentar</button>
            <button onClick={resetar}>resetar</button>
            <button onClick={diminuir}>diminuir</button>
        </div>
    );
}

export default Contador;