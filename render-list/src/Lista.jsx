function Lista({items, categoria}) {

    const lista = items;

    const listaItems = lista.map(
        item => <li key={item.id}>{item.nome}: <strong>{item.calorias}</strong> calorias</li>
    );

    return (
        <>
            <h1>{categoria}</h1>
            <ol>{listaItems}</ol>
        </>
    );
}

export default Lista;