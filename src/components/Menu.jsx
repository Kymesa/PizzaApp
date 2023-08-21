import { pizzaDB } from "../db";
import GetPizzas from "./GetPizzas";

function Menu() {
  let nPizzas = pizzaDB.length;

  return (
    <>
      <p className="text-center text-4xl text-orange-400 mb-10">NUESTRO MENU</p>
      <div className="flex justify-center gap-10 flex-wrap">
        {nPizzas > 0 ? (
          <>
            <GetPizzas pizza={pizzaDB} />
          </>
        ) : (
          <h1 className="text-white">NO HAY PIZZAS POR EL MOMENTO!!!</h1>
        )}
      </div>
    </>
  );
}

export default Menu;
