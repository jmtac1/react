function Botao() {

    const clique = e => e.target.textContent = 'clicou';
    
    // let cont = 0;
    // const clique2 = nome => {
    //     if (cont < 3) {
    //         cont ++;
    //         console.log(`voce me clicou ${cont} vezes`);
    //     } else {
    //         console.log(`${nome} pare de me clicar`);
    //     }
    // };

    return (
        <button onClick={e => clique(e)}>me clique</button>
    );
}

export default Botao;