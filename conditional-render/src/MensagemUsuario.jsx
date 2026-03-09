function MensagemUsuario({estaLogado, nome}) {

    const logado = <h1 className="logado">bem vindo</h1>;
    const deslogado = <h1 className="deslogado">faça login</h1>;
    
    return (
        estaLogado ? logado : deslogado
    );
}

export default MensagemUsuario