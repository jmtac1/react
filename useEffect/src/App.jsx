// O useEffect é um Hook do React que em termos mais simples, ele é usado para lidar com efeitos colaterais (side effects), que 
// são operações que interagem com o "mundo exterior" fora do fluxo normal de renderização do React, como requisições de API, 
// manipulação manual do DOM, ou configuração de event listeners e temporizadores.

// useEffect(() => {})          // roda depois de toda re-renderização
// useEffect(() => {}, [])      // só roda quando o componente é montado
// useEffect(() =>, [valor])    // roda quando é montado e quando o valor muda

import Exemplo1 from "./Exemplo1";
import Exemplo2 from "./Exemplo2";

function App() {

    return (
        <>
            <Exemplo2 />
        </>
    );
}

export default App;
