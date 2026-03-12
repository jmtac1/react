import React, { useState } from "react";

function Componente() {

    const [nome, setNome] = useState('joao');
    const [num, setNum] = useState(0);
    const atualizarInput = e => {
        setNome(e.target.value);
    };
    const atualizarNumero = e => {
        setNum(e.target.value);
    };

    return (
        <div>
            <input type="text" value={nome} onChange={atualizarInput} />
            <p>{nome}</p>

            <input type="number" value={num} onChange={atualizarNumero} />
            <p>{num}</p>
        </div>
    );
}
export default Componente;