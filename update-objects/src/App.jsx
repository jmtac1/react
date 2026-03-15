import React, { useState } from "react";

function App() {
  const [carro, setCarro] = useState({ano: 2013, marca: 'honda', modelo: 'civic'});

  const atualizarMarca = e => {
    setCarro(prevCarro => ({...prevCarro, marca: e.target.value}));
  };
  const atualizarModelo = e => {
    setCarro(prevCarro => ({...prevCarro, modelo: e.target.value}));
  };
  const atualizarAno = e => {
    setCarro(prevCarro => ({...prevCarro, ano: e.target.value}));
  };

  return (
    <div>
    <p>carro favorito: {carro.marca} {carro.modelo} {carro.ano}</p>
    <input type="text" value={carro.marca} onChange={atualizarMarca}/> <br />
    <input type="text" value={carro.modelo} onChange={atualizarModelo}/> <br />
    <input type="number" value={carro.ano} onChange={atualizarAno}/> <br />
    </div>
  );


}

export default App;
