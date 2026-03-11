// Os Hooks são funções especiais introduzidas no React 16.8 que permitem usar o state (estado) e outros recursos do React em
// componentes funcionais, sem a necessidade de escrever classes.
// (useState, useEffect, useContext, useReducer, and more...) 

// O useState() é um Hook do React que permite adicionar estado local a componentes funcionais. Ele é fundamental para gerenciar 
// dados dinâmicos em sua aplicação, como contadores, entradas de formulários ou qualquer valor que precise ser preservado entre 
// re-renderizações. 

import Contador from "./Contador";

function App() {
  return (
    <Contador />
  );
}

export default App;
