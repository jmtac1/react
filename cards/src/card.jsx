import fotoPerfil from './assets/foto.jpg'

function Card() {
    return (
        <div className="card">
            <img src={fotoPerfil} alt="foto" />
            <h2>João Manoel</h2>
            <p>Eu estudo programação, gosto de jogar jogos e assistir filmes e séries</p>
        </div>
    );
}

export default Card