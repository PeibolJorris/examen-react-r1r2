import { useState, useRef } from "react";

export function InputConContador() {
  const [texto, setTexto] = useState("");
  const renders = useRef(0);
  const inputRef = useRef(null);
  renders.current++;
  console.log("Render", renders.current);
  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <p>{texto.length}</p>
      <button onClick={() => inputRef.current.focus()}>ENFOCAR</button>
      <p>{renders.current} renderizados</p>
    </>
  );
}
