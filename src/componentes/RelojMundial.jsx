import { useState, useEffect } from "react";

export function RelojMundial() {
  const [zonaHoraria, setZonaHoraria] = useState("America/Mexico_City");
  const [hora, setHora] = useState(
    new Date().toLocaleTimeString("es-MX", { timeZone: zonaHoraria }),
  );
  useEffect(() => {
    const id = setInterval(
      () =>
        setHora(
          new Date().toLocaleTimeString("es-MX", { timeZone: zonaHoraria }),
        ),
      1000,
    );
    return () => {
      clearInterval(id);
    };
  }, [zonaHoraria]);
  useEffect(() => {
    document.title = `Zona horaria ${zonaHoraria}. Hora ${hora}`;
  }, [zonaHoraria, hora]);
  return (
    <>
      <select
        value={zonaHoraria}
        onChange={(e) => setZonaHoraria(e.target.value)}
      >
        <option value="America/Mexico_City">America/Mexico_City</option>
        <option value="Europe/Madrid">Europe/Madrid</option>
        <option value="Asia/Tokyo">Asia/Tokyo</option>
      </select>
      <p>{hora}</p>
    </>
  );
}
