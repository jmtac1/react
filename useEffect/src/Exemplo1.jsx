import { useState, useEffect } from "react";

function Exemplo1() {

    const [cont, setCont] = useState(0);
    const [cor, setCor] = useState('green');

    useEffect(() => {
        document.title = `contagem: ${cont} ${cor}`;
    }, [cont, cor]);



    const adicionar = () => {
        setCont(prevCont => prevCont + 1);
    };

    const diminuir = () => {
        setCont(prevCont => prevCont - 1);
    };

    const mudarCor = () => {
        setCor(prevCor => prevCor === 'green' ? 'red' : 'green')
    };
    
    return (
        <>
            <p style={{color: cor}}>contagem: {cont}</p>
            <button onClick={adicionar}>adicionar</button>
            <button onClick={diminuir}>diminuir</button>
            <button onClick={mudarCor}>mudar de cor</button>
        </>
    );
}

export default Exemplo1;