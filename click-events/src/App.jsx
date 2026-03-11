// Para gerenciar eventos de clique no React, utiliza-se o manipulador de eventos onClick. Diferente do HTML nativo que usa onclick 
// em minúsculas e espera uma string, o React usa a sintaxe camelCase (onClick) e espera uma função (callback) como valor entre 
// chaves. 

import Botao from "./Botao";
import Imagem from "./Imagem";

function App() {
  return (
    <>
      <Botao />
      <Imagem />
    </>
  );
}

export default App;
