// A função de atualização (updater function) é uma função especial que pode ser passada para a função setter de estado no React 
// (por exemplo, setCount no useState). Ela é usada para garantir que a atualização do estado seja baseada no estado pendente/
// anterior mais recente, o que é crucial devido à natureza assíncrona das atualizações de estado no React. 

import { useState } from "react";

function App() {
  const [cont, setCont] = useState(0);

  const incrementar = () => {
    setCont(prevCont => prevCont + 1);
    setCont(prevCont => prevCont + 1);
    setCont(prevCont => prevCont + 1);
  };

  const reset = () => {
    setCont(0);
  };

  const decremento = () => {
    setCont(prevCont => prevCont - 1);
    setCont(prevCont => prevCont - 1);
    setCont(prevCont => prevCont - 1);
  };

  return (
    <div>
      <h1>{cont}</h1>
      <button onClick={incrementar}>incrementar</button>
      <button onClick={reset}>reset</button>
      <button onClick={decremento}>decremento</button>
    </div>
  );
}

export default App;
