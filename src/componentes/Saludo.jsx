import { useIdioma } from "./IdiomaContext";
export function Saludo() {
  const { idioma, cambiarIdioma, traduccion } = useIdioma();
  return (
    <>
      <span>{traduccion.saludo}</span>
      <button onClick={() => cambiarIdioma(idioma === "es" ? "en" : "es")}>
        {idioma === "es" ? "en" : "es"}
      </button>
    </>
  );
}
