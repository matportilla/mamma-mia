import React, { useContext } from 'react';
import PizzaContext from '../../context/PizzaContext';
import './Cart.css';

function calcularSubtotal(price, count) {
  return price * count;
}

function calcularPrecioTotal(totalPedido) {
  return totalPedido.reduce((total, product) => {
    return total + calcularSubtotal(product.price, product.count);
  }, 0);
}

function CartItem({ product, onAdd, onSubtract, onDelete }) {
  return (
    <div className="contenedor-seleccion" key={product.id}>
      <div className="lista-precio">
        <img className="img-cart" src={product.img} alt={product.name} />
        <div className="info-pedido">
          <p>
            {product.name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
              letter.toUpperCase()
            )}
          </p>
        </div>
        <div className="info-precio">
          <p>${product.price.toLocaleString('es-CL')}</p>
        </div>
        <div className="info-subtotal">
          <p>SubTotal ${calcularSubtotal(product.price, product.count).toLocaleString('es-CL')}</p>
        </div>
      </div>
      <div className="botones">
        <button className="btn btn-danger" onClick={onAdd}>
          +
        </button>
        <h5 className="contador">{product.count}</h5>
        <button className="btn btn-primary" onClick={onSubtract}>
          -
        </button>
        <button className="btn" onClick={onDelete}>
          🗑️
        </button>
      </div>
    </div>
  );
}

function Cart() {
  const { totalPedido, setTotalPedido, addToCart } = useContext(PizzaContext);

  const sustraer = (id) => {
    const findProduct = totalPedido.findIndex((p) => p.id === id);
    if (findProduct >= 0 && totalPedido[findProduct].count > 1) {
      totalPedido[findProduct].count--;
      setTotalPedido([...totalPedido]);
    }
  };

  const eliminar = (id) => {
    const findProduct = totalPedido.findIndex((p) => p.id === id);
    totalPedido[findProduct].count = 0;
    setTotalPedido([...totalPedido]);
  };

  return (
    <div className="contenedor">
      <h3>Detalles del pedido:</h3>
      <div className="lista-compra">
        {totalPedido
          .filter((p) => p.count > 0)
          .map((p) => (
            <CartItem
              key={p.id}
              product={p}
              onAdd={() => addToCart(p)}
              onSubtract={() => sustraer(p.id)}
              onDelete={() => eliminar(p.id)}
            />
          ))}
      </div>
      <div className="contenedor-total">
        <p>Total: ${calcularPrecioTotal(totalPedido).toLocaleString('es-CL')}</p>
        <button
          className="btn btn-success"
          onClick={() => alert('Momentáneamente fuera de servicio✌️')}
        >
          Ir a Pagar
        </button>
      </div>
    </div>
  );
}

export default Cart;

