import React, { useState } from "react";

function Cores() {
    const [cor, setCor] = useState('#ffffff');

    const atualizarCor = e => {
        setCor(e.target.value);
    };

    return (
        <div>
            <h1>Paleta de cores</h1>
            <div id="cor" style={{backgroundColor: cor}}>
                <p>cor escolhida: {cor}</p>
            </div>
            <label>escolha uma cor: </label> <br/>
            <input type="color" value={cor} onChange={atualizarCor}/>
        </div>
    );
}

export default Cores;