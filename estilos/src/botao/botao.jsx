import styles from './botao.module.css'

function Botao() {
    // estilo inline
    const estilo2 = {
        backgroundColor: 'navy',
        color: 'white',
        fontSize: '2rem',
        borderRadius: '10px',
        padding: '10px',
        border: 'none',
        cursor: 'pointer',
    }

    return (
        <>
            <button className="botao">botão 1</button>
            <button className={styles.botao}>botão 2</button>
            <button style={estilo2}>botão 3</button>
        </>
    );
}

export default Botao