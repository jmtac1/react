function Lista({items, categoria}) {
    
    
    // ordenando uma lista de objetos:
    // frutas.sort((a, b) => a.nome.localeCompare(b.nome)); // ordem alfabetica
    // frutas.sort((a, b) => b.nome.localeCompare(a.nome)); // orden alfabetica reversa
    // frutas.sort((a, b) => a.calorias - b.calorias) // ordem numerica
    // frutas.sort((a, b) => b.calorias - a.calorias) // ordem numerica reversa

    // filtrando uma lista de objetos:
    // const frutasCaloricas = frutas.filter(fruta => fruta.calorias > 100);

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