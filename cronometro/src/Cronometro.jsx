import { useState, useEffect, useRef } from "react"

function Cronometro() {

    const [estaCorrendo, setEstaCorrendo] = useState(false);
    const [tempoCorrido, setTempoCorrido] = useState(0);
    const idIntervaloRef = useRef(null);
    const tempoInicioRef = useRef(0);

    useEffect(() => {
        if (estaCorrendo) {
            idIntervaloRef.current = setInterval(() => {
                setTempoCorrido(Date.now() - tempoInicioRef.current);
            }, 10);
        }

        return () => {
            clearInterval(idIntervaloRef.current);
        }
    }, [estaCorrendo]);

    function comecar() {
        setEstaCorrendo(true);
        tempoInicioRef.current = Date.now() - tempoCorrido;
    }

    function parar() {
        setEstaCorrendo(false);
    }

    function resetar() {
        setTempoCorrido(0);
        setEstaCorrendo(false);
    }

    function formatarTempo() {
        let horas = Math.floor(tempoCorrido / (1000 * 60 * 60));
        let minutos = Math.floor(tempoCorrido / (1000 * 60) % 60);
        let segundos = Math.floor(tempoCorrido / (1000) % 60);
        let milisegundos = Math.floor((tempoCorrido % 1000) / 10);

        horas = String(horas).padStart(2, '0');
        minutos = String(minutos).padStart(2, '0');
        segundos = String(segundos).padStart(2, '0');
        milisegundos = String(milisegundos).padStart(2, '0');

        return `${horas}:${minutos}:${segundos}:${milisegundos}`;
    }

    return (
        <>
            <div className="cronometro">
                <div className="tempo">{formatarTempo()}</div>
                <div className="botoes">
                    <button id="comecar" onClick={comecar}>começar</button>
                    <button id="parar" onClick={parar}>parar</button>
                    <button id="resetar" onClick={resetar}>resetar</button>
                </div>
            </div>
        </>
    );
}

export default Cronometro