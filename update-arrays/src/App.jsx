import React, { useState } from "react";

function App() {
  const [frutas, setFrutas] = useState(['maçã', 'caju', 'manga']);

  const adicionarFrutas = e => {
    const novaFruta = document.getElementById('fruta').value;
    document.getElementById('fruta').value = '';

    setFrutas(prevFrutas => [...prevFrutas, novaFruta]);
  };

  function removerFrutas(index) {
    setFrutas(frutas.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>lista de frutas</h1>
      <ul>
        {frutas.map((fruta, index) => 
        <li key={index} onClick={() => removerFrutas(index)}>
          {fruta}
        </li>)}
      </ul>
      <input type="text" id="fruta" placeholder="adicione uma fruta"/>
      <button onClick={adicionarFrutas}>adicionar fruta</button>
    </div>
  );

}

export default App;
