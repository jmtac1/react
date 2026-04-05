// O useRef é um Hook do React que permite criar referências mutáveis que persistem durante todo o ciclo de vida do componente, sem 
// causar novas renderizações quando seu valor muda. É ideal para acessar diretamente elementos do DOM ou armazenar valores técnicos 
// (como IDs de timers) que não impactam a interface visual.

import MeuComponente from "./MeuComponente";

function App() {

  return (
    <>
      <MeuComponente />
    </>
  );
}

export default App
