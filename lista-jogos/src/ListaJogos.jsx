import React, { useState } from "react";

function ListaJogos() {
    const [jogos, setJogos] = useState(['doom', 'fifa', 'tf2']);
    const [novoJogo, setNovoJogo] = useState('');

    function atualizarInput(evento) {
        setNovoJogo(evento.target.value);
    }

    function addJogo() {

    }

    function delJogo(index) {

    }

    function moverJogoCima(index) {

    }

    function moverJogoBaixo(index) {

    }


    return (
        <div className="lista-jogos">
            <h1>Lista de jogos</h1>

            <div>
                <input type="text" placeholder="digite um jogo" value={novoJogo} onChange={atualizarInput}/>
                <button className="add-botao" onClick={addJogo}>adicionar jogo</button>
            </div>
        </div>
    );
}

export default ListaJogos;