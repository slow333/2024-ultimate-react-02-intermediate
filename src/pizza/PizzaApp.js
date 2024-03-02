import './pizza_index.css';
import './data';
import {pizzaData} from "./data";
import Pizza from "./Pizza";
import Menu from "./Menu";
import Footer from "./Footer";

function PizzaApp() {
  const date = new Date();
  const time = date.getHours();
  console.log(time)
  return (
    <div className='container'>
      <Menu/>
      <ul className='pizzas'>
        {pizzaData.map(pizza => <Pizza key={pizza.name} pizza={pizza}/>)}
      </ul>
      <Footer time={time}/>
    </div>
  );
}

export default PizzaApp