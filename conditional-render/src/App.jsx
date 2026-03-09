// A renderização condicional no React permite exibir elementos ou componentes diferentes com base em determinadas condições 
// (como true/false, status do usuário, ou dados de uma API). Isso é feito usando a lógica JavaScript padrão, como if statements,  
// operadores ternários e o operador lógico &&.

import MensagemUsuario from "./MensagemUsuario"

function App() {
  return (
    <MensagemUsuario estaLogado={true} nome='joão'/>
  );
}

export default App
