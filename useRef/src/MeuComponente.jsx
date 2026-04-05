import { useState, useEffect, useRef } from "react";

function MeuComponente() {
    
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("atualizou");
    });

    const handleClick1 = () => {
        inputRef1.current.focus();
        inputRef1.current.style.color = 'red';
        inputRef1.current.style.backgroundColor = 'yellow';
    };

    const handleClick2 = () => {
        inputRef2.current.focus();
        inputRef2.current.style.color = 'blue';
        inputRef2.current.style.backgroundColor = 'green';
    };

    const handleClick3 = () => {
        inputRef3.current.focus();
        inputRef3.current.style.color = 'grey';
        inputRef3.current.style.backgroundColor = 'pink';
    };

    return (
        <>
            <button onClick={handleClick1}>click em mim 1</button>
            <input ref={inputRef1} type="text" /> <br />

            <button onClick={handleClick2}>click em mim 2</button>
            <input ref={inputRef2} type="text" /> <br />

            <button onClick={handleClick3}>click em mim 3</button>
            <input ref={inputRef3} type="text" />
        </>
    );
}

export default MeuComponente