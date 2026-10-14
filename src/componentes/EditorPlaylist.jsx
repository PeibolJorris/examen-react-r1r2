import { useState } from "react";

export function EditorPlaylist() {
  const [lista, setLista] = useState([]);
  const [texto, setTexto] = useState("");

  function agregar() {
    const nueva = {
      id: crypto.randomUUID(),
      nombre: texto,
      favorita: false,
    };
    setLista([...lista, nueva]);
    setTexto("");
  }
  function alternarFavorita(id) {
    setLista(
      lista.map((c) => (c.id === id ? { ...c, favorita: !c.favorita } : c)),
    );
  }
  function eliminar(id) {
    setLista(lista.filter((c) => c.id !== id));
  }
  const total = lista.length;
  const numFavoritas = lista.filter((c) => c.favorita).length;
  return (
    <>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button onClick={agregar} disabled={texto.trim() === ""}>
        Añadir
      </button>
      <ul>
        {lista.map((c) => {
          return (
            <li key={c.id}>
              {c.nombre}
              {c.favorita && "⭐"}
              <button onClick={() => alternarFavorita(c.id)}>
                ⭐ Favorita
              </button>
              <button onClick={() => eliminar(c.id)}>❌ Eliminar</button>
            </li>
          );
        })}
      </ul>
      <span>{`Total: ${total} canciones - ${numFavoritas} favoritas`}</span>
    </>
  );
}
