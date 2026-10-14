export function TarjetaCancion({ titulo, artista, portada, favorita }) {
  return (
    <article>
      <h3>
        {titulo}
        {favorita && "❤️"}
      </h3>
      <p>{artista}</p>
      {portada ? (
        <img src={portada} alt={titulo} width={200} height={200} />
      ) : (
        <div
          style={{
            width: 200,
            height: 200,
            margin: "0 auto",
            background: "#ccc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Sin portada
        </div>
      )}
    </article>
  );
}
