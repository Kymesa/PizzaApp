import Pizza from "./Pizza";

function GetPizzas({ pizza }) {
  return (
    <>
      {pizza.map((p) => (
        <Pizza
          name={p.nombre}
          descripcion={p.ingredientes.length}
          price={p.precio}
          size={p.size}
          sold={p.sold}
          key={p.id}
        />
      ))}
    </>
  );
}

export default GetPizzas;
