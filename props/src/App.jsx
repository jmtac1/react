// Props (propriedades) no React são objetos usados para passar dados e comportamentos de um componente pai para um filho, permitindo 
// personalização, reusabilidade e a criação de interfaces dinâmicas. Elas funcionam como atributos HTML, são somente leitura 
// (imutáveis) e garantem um fluxo de dados unidirecional.

import Estudantes from "./Estudantes";

function App() {
  return (
    <>
      <Estudantes nome='joão' idade={20} eEstudante={true}/>
      <Estudantes nome='maria' idade={22} eEstudante={false}/>
      <Estudantes nome='luis' idade={25} eEstudante={false}/>
      <Estudantes nome='ana' idade={18} eEstudante={true}/>
    </>
  );
}

export default App
