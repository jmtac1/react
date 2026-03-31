import { useState, useEffect } from "react";

function Relogio() {

    const [tempo, setTempo] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setTempo(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalo);
        }
    }, []);

    function tempoFormatado() {
        let horas = tempo.getHours();
        const minutos = tempo.getMinutes();
        const segundos = tempo.getSeconds();

        return `${padZero(horas)}:${padZero(minutos)}:${padZero(segundos)}`
    }

    function padZero(numero) {
        return (numero < 10 ? '0' : '') + numero;
    }

    return (
        <div className="container-relogio">
            <div className="relogio">
                <span>{tempoFormatado()}</span>
            </div>
        </div>
    );
}

export default Relogio