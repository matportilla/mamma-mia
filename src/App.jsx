import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PizzaContext from "./context/PizzaContext";
import Navbars from "./components/navbar/Navbars";
import Home from "./views/home/Home";
import Details from "./views/detail/Details";
import Cart from "./views/cart/Cart";
import NotFound from "./views/notfound/NotFound";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pizzaData, setPizzaData] = useState([]);
  const [totalPedido, setTotalPedido] = useState([]);
  const endpoint = "/pizzas.json";

  const fetchData = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    setPizzaData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToCart = ({ id, price, name, img }) => {
    const updatedTotalPedido = [...totalPedido];
    const findProduct = updatedTotalPedido.findIndex((p) => p.id === id);

    if (findProduct >= 0) {
      updatedTotalPedido[findProduct].count++;
    } else {
      updatedTotalPedido.push({ id, price, name, img, count: 1 });
    }

    setTotalPedido(updatedTotalPedido);
  };

  return (
    <div className="App">
      <PizzaContext.Provider
        value={{ pizzaData, setPizzaData, totalPedido, setTotalPedido, addToCart }}
      >
        <BrowserRouter>
          <Navbars />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<Details />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PizzaContext.Provider>
    </div>
  );
}

export default App;
