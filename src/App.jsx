import { TarjetaCancion } from "./componentes/TarjetaCancion";
import { EditorPlaylist } from "./componentes/EditorPlaylist";
import { RelojMundial } from "./componentes/RelojMundial";
import { InputConContador } from "./componentes/InputConContador";
import { IdiomaProvider } from "./componentes/IdiomaContext";
import { Saludo } from "./componentes/Saludo";
const canciones = [
  {
    id: 1,
    titulo: "Noche en Madrid",
    artista: "Los Faroles",
    portada: "https://picsum.photos/id/10/200",
    favorita: true,
  },
  {
    id: 2,
    titulo: "Mar de fondo",
    artista: "Lucía Vela",
    portada: "https://picsum.photos/id/20/200",
    favorita: false,
  },
  {
    id: 3,
    titulo: "Sin señal",
    artista: "Ruido Blanco",
    favorita: true, // ← sin portada → debería salir el cuadrado gris
  },
  {
    id: 4,
    titulo: "Última parada",
    artista: "Tren Nocturno",
    portada: "https://picsum.photos/id/30/200",
    favorita: false,
  },
];

function App() {
  return (
    <>
      <h1>EJERCICIO 1</h1>
      {canciones.map((c) => {
        return (
          <TarjetaCancion
            key={c.id}
            titulo={c.titulo}
            artista={c.artista}
            portada={c.portada}
            favorita={c.favorita}
          />
        );
      })}
      <h1>EJERCICIO 2</h1>

      <EditorPlaylist />

      <h1>EJERCICIO 3</h1>
      <RelojMundial />

      <h1>EJERCICIO 4</h1>
      <InputConContador />

      <h1>EJERCICIO 5</h1>
      <IdiomaProvider>
        <Saludo />
      </IdiomaProvider>
    </>
  );
}

export default App;
