import React, { useState } from "react";

function ListaJogos() {
    const [jogos, setJogos] = useState([]);
    const [novoJogo, setNovoJogo] = useState('');

    function atualizarInput(evento) {
        setNovoJogo(evento.target.value);
    }

    function addJogo() {
        if (novoJogo.trim() !== '') {
            setJogos(prevJogos => [...prevJogos, novoJogo]);
            setNovoJogo('');
        }
    }

    function delJogo(index) {
        const jogosAtualizados = jogos.filter((_, i) => i !== index);
        setJogos(jogosAtualizados);
    }

    function moverJogoCima(index) {
        if (index > 0) {
            const jogosAtualizados = [...jogos];
            [jogosAtualizados[index], jogosAtualizados[index - 1]] = 
            [jogosAtualizados[index - 1], jogosAtualizados[index]];
            setJogos(jogosAtualizados);
        }
    }

    function moverJogoBaixo(index) {
        if (index < jogos.length - 1) {
            const jogosAtualizados = [...jogos];
            [jogosAtualizados[index], jogosAtualizados[index + 1]] = 
            [jogosAtualizados[index + 1], jogosAtualizados[index]];
            setJogos(jogosAtualizados);
        }
    }


    return (
        <div className="lista-jogos">
            <h1>Lista de jogos</h1>

            <div>
                <input type="text" placeholder="digite um jogo" value={novoJogo} onChange={atualizarInput}/>
                <button className="add-botao" onClick={addJogo}>adicionar jogo</button>
            </div>

            <div>
                <ol>
                    {jogos.map((jogo, index) => 
                        <li key={index}>
                            <span className="texto">{jogo}</span>
                            <span className="botao">
                                <button className="del-botao" onClick={() => delJogo(index)}>🗑️</button>
                                <button className="mv-cima-botao" onClick={() => moverJogoCima(index)}>⬆️</button>
                                <button className="mv-baixo-botao" onClick={() => moverJogoBaixo(index)}>⬇️</button>
                            </span>
                            
                        </li>    
                    )}
                </ol>
            </div>
        </div>
    );
}

export default ListaJogos;