import { useState, useEffect } from "react";

function Exemplo2() {

    const [width, setWidth] = useState(window.innerWidth);

    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', ajustarTamanho);

        return () => {
            window.removeEventListener('resize', ajustarTamanho);
        }
    }, []);

    useEffect(() => {
        document.title = `largura: ${width}px, altura: ${height}px`;
    }, [width, height]);

    function ajustarTamanho() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    
    return (
        <>
            <p>largura da janela: {width} px</p>
            <p>altura da janela: {height} px</p>
        </>
    );
}

export default Exemplo2;