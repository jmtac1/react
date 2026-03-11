import React, { useState } from "react";

function Componente() {
    const [nome, setNome] = useState('convidado');
    const [idade, setIdade] = useState(0);
    const [eProgramador, setEProgramador] = useState(false);

    const atualizarNome = () => {
        setNome('joao');
    };
    const atualizarIdade = () => {
        setIdade(idade + 1);
    };
    const mudarStatus = () => {
        setEProgramador(!eProgramador);
    };

    return (
        <div>
            <p>nome: {nome}</p>
            <p>idade: {idade}</p>
            <p>é programador: {eProgramador ? 'sim' : 'não'}</p>
            <button onClick={atualizarNome}>definir nome</button>
            <button onClick={atualizarIdade}>incrementar idade</button>
            <button onClick={mudarStatus}>mudar status</button>
        </div>
    );
}

export default Componente;