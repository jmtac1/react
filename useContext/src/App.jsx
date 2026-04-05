// O hook useContext do React é uma ferramenta que permite que componentes acessem e compartilhem dados (como temas, autenticação 
// ou preferências) sem a necessidade de passar propriedades manualmente por cada nível da árvore de componentes, prática 
// conhecida como prop drilling.

// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//		<Child />
//    </MyContext.Provider>

// CONSUMER COMPONENTS
// 1. import React, { useContext } from 'react';
//     import { MyContext } from './ComponentA';
// 2. const value = useContext(MyContext);

import ComponenteA from "./ComponenteA";

function App() {
  
  return (
    <>
      <ComponenteA />
    </>
  );
}

export default App
