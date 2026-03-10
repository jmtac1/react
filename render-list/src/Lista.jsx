function Lista() {
    const frutas = [{id: 1, nome: 'limão', calorias: 68},
                    {id: 2, nome: 'caju', calorias: 70},
                    {id: 3, nome: 'laranja', calorias: 130},
                    {id: 4, nome: 'acerola', calorias: 45}];
    
    // ordenando uma lista de objetos:
    // frutas.sort((a, b) => a.nome.localeCompare(b.nome)); // ordem alfabetica
    // frutas.sort((a, b) => b.nome.localeCompare(a.nome)); // orden alfabetica reversa
    // frutas.sort((a, b) => a.calorias - b.calorias) // ordem numerica
    // frutas.sort((a, b) => b.calorias - a.calorias) // ordem numerica reversa

    // filtrando uma lista de objetos:
    // const frutasCaloricas = frutas.filter(fruta => fruta.calorias > 100);

    const listaItems = frutas.map(
        fruta => <li key={fruta.id}>{fruta.nome}: <strong>{fruta.calorias}</strong> calorias</li>
    );

    return (
    <ol>{listaItems}</ol>
    );
}

export default Lista;