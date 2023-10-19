import { Container, Navbar } from "react-bootstrap";
import { useContext } from "react";
import { NavLink } from 'react-router-dom';
import PizzaContext from "../../context/PizzaContext";
import "../navbar/Navbar.css";

function Navbars() {
  const { totalPedido } = useContext(PizzaContext);
  let precio = totalPedido.reduce((a, { count, price }) => a + price * count, 0);

  return (
    <div className="style">
    <Navbar
      className="d-flex justify-content-between px-5"
    >
      <Container>

        <NavLink
          className="headText"
          to="/">
          Cosa cucina la Nonna? 🍕
        </NavLink>

        <NavLink
          className="headText"
          to="/carrito">
          🛒Carrito ${precio.toLocaleString("es-CL")}
        </NavLink>

      </Container>
    </Navbar>
    </div>
  );
};

export default Navbars;