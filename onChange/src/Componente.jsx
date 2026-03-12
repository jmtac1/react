import React, { useState } from "react";

function Componente() {

    const [nome, setNome] = useState('');
    const [num, setNum] = useState(0);
    const [texto, setTexto] = useState('');
    const [cor, setCor] = useState('verde');
    const [comida, setComida] = useState('');

    const atualizarInput = e => {
        setNome(e.target.value);
    };
    const atualizarNumero = e => {
        setNum(e.target.value);
    };
    const atualizarTexto = e => {
        setTexto(e.target.value);
    };
    const atualizarCor = e => {
        setCor(e.target.value);
    };
    const atualizarComida = e => {
        setComida(e.target.value);
    };

    return (
        <div>
            <input type="text" value={nome} onChange={atualizarInput} />
            <p>Nome: {nome}</p>

            <input type="number" value={num} onChange={atualizarNumero} />
            <p>Quantidade: {num}</p>

            <textarea value={texto} onChange={atualizarTexto} placeholder='adicione um comentario'>comentario</textarea>
            <p>Comentario: {texto}</p>

            <select value={cor} onChange={atualizarCor}>
                <option value="azul">azul</option>
                <option value="verde">verde</option>
                <option value="amarelo">amarelo</option>
            </select>
            <p>Cor favorita: {cor}</p>

            <label>
                <input type="radio" value='Pastel' checked={comida === 'Pastel'} onChange={atualizarComida} />    
                Pastel
            </label> <br/>
            <label>
                <input type="radio" value='Coxinha' checked={comida === 'Coxinha'} onChange={atualizarComida} />
                Coxinha
            </label>
            <p>Comida favorita: {comida}</p>
        </div>
    );
}
export default Componente;