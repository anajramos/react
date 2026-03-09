 import {useState} from 'react';

 function BotaoContador() {
    const [contador, setContador] = useState(0);

    return (
        <>
        <p>Valor: {contador}</p>
        <button onClick={() => setContador(contador + 1)}> ❤️ Clique aqui</button>
        <button onClick={() => setContador(contador - 1)}> 💔 Clique aqui</button>
        <button onClick={() => setContador(0)}> 🔄 Resetar</button>
        </>
    )
    }

export default BotaoContador;
