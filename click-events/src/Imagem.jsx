function Imagem() {
    const url = './src/assets/gato.jpg';

    const clique = e => e.target.style.display = 'none';

    return (
        <img onClick={e => clique(e)} src={url} alt="gato" />
    );
}

export default Imagem;