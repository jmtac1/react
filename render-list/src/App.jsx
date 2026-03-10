import Lista from "./Lista"

function App() {
  const frutas = [{id: 1, nome: 'limão', calorias: 68},
                  {id: 2, nome: 'caju', calorias: 70},
                  {id: 3, nome: 'laranja', calorias: 130},
                  {id: 4, nome: 'acerola', calorias: 45}];
  
  const salgados = [{id: 1, nome: 'coxinha', calorias: 338},
                   {id: 2, nome: 'pastel', calorias: 530},
                   {id: 3, nome: 'hamburger', calorias: 820},
                   {id: 4, nome: 'cachorro quente', calorias: 673}];
  return (
    <>
      {frutas.length > 0 && <Lista items={frutas} categoria="frutas"/>}
      {salgados.length > 0 && <Lista items={salgados} categoria="salgados"/>}
    </>
  );
}

export default App;