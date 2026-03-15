import React, { useState } from "react";

function App() {
  const [carros, setCarros] = useState([]);
  const [anoCarro, setAnoCarro] = useState(new Date().getFullYear());
  const [marcaCarro, setMarcaCarro] = useState('');
  const [modeloCarro, setModeloCarro] = useState('');

  function adicionarCarro() {
    const novoCarro = {marca: marcaCarro, modelo: modeloCarro, ano: anoCarro};

    setMarcaCarro('');
    setModeloCarro('');
    setAnoCarro(new Date().getFullYear());

    setCarros(prevCarros => [...prevCarros, novoCarro]);
  }

  function removerCarro(index) {
    carros.filter((_, i) => i !== index);
  }

  function atualizarAno(e) {
    setAnoCarro(e.target.value);
  }

  function atualizarMarca(e) {
    setMarcaCarro(e.target.value);
  }

  function atualizarModelo(e) {
    setModeloCarro(e.target.value);
  }

  return (
    <div>
      <h1>lista de objetos carros</h1>
      <ul>
        {carros.map((carro, index) =>
          <li key={index} onClick={() => removerCarro(index)}>
            {carro.marca} {carro.modelo} {carro.ano}
          </li>)}
      </ul>

      <input type="text" value={marcaCarro} onChange={atualizarMarca} placeholder="digite a marca do carro"/> <br />
      <input type="text" value={modeloCarro} onChange={atualizarModelo} placeholder="digite o modelo do carro"/> <br />
      <input type="number" value={anoCarro} onChange={atualizarAno}/> <br />
      <button onClick={adicionarCarro}>adicionar carro</button>
    </div>
  );
}

export default App
