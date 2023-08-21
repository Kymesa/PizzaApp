/* eslint-disable react/prop-types */
import imgPizza from "../assets/pizza-jamon-queso.jpg";
function Pizza({ name, descripcion, price, size, sold }) {
  return (
    <>
      <div>
        <h2 className="text-center text-yellow-50 text-2xl mt-4">{name}</h2>

        <h1 className=" mx-auto my-4 ml-10   text-lg">
          Ingredientes:
          {descripcion},
          {sold ? <p className="text-red-500">AGOTADO</p> : <p> ${price} </p>}
        </h1>

        {size == "grande" ? (
          <h1 className=" mx-auto my-4 ml-10 text-green-600 text-lg">{size}</h1>
        ) : (
          <h1 className=" mx-auto my-4 ml-10 text-lg">{size}</h1>
        )}

        <img className="mx-auto" src={imgPizza} alt="" />
      </div>
    </>
  );
}

export default Pizza;
