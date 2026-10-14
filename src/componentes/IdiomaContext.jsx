import { createContext, useContext, useState } from "react";

const traducciones = {
  es: { saludo: "Hola", despedida: "Adiós" },
  en: { saludo: "Hello", despedida: "Goodbye" },
};

const IdiomaContext = createContext(null);

export function IdiomaProvider({ children }) {
  const [idioma, setIdioma] = useState("es");

  function cambiarIdioma(i) {
    setIdioma(i);
  }
  const valor = { idioma, cambiarIdioma, traduccion: traducciones[idioma] };
  return (
    <IdiomaContext.Provider value={valor}>{children}</IdiomaContext.Provider>
  );
}
export function useIdioma() {
  const ctx = useContext(IdiomaContext);
  if (!ctx)
    throw new Error("useIdioma debe de usarse dentro de IdiomaProvider");
  return ctx;
}
