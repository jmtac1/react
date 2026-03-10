import Lista from "./Lista"

function App() {
  const frutas = [{id: 1, nome: 'limão', calorias: 68},
                  {id: 2, nome: 'caju', calorias: 70},
                  {id: 3, nome: 'laranja', calorias: 130},
                  {id: 4, nome: 'acerola', calorias: 45}];

  return (
    <Lista items={frutas} categoria="frutas"/>
  );
}

export default App
