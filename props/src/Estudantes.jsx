

function Estudantes({nome, idade, eEstudante}) {
    return (
        <div>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Estudante: {eEstudante ? 'sim' : 'não'}</p>
        </div>
    );
}

export default Estudantes