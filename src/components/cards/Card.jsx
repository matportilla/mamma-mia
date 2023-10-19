import React, { useState, useContext } from 'react';
import PizzaContext from '../../context/PizzaContext';
import { useNavigate } from 'react-router-dom';
import '../cards/Card.css';

function Card({ product }) {
    const navigate = useNavigate();
    const { addToCart } = useContext(PizzaContext);
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(product);
        setAdded(true);

        setTimeout(() => setAdded(false), 1000);
    };

    return (
        <div className="card col-lg-3 col-md-6" key={product.id}>
            <img className="zoom card-img-top" src={product.img} alt={product.name} />
            <div className="card-body">
                <h5>{product.name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())}</h5>
                <hr />
                <ul>
                    {product.ingredients.map((item) => (
                        <li key={item}>🍕 {item.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())}</li>
                    ))}
                </ul>
                <h3 className="card-title">${product.price.toLocaleString('es-CL')}</h3>
                <hr />
                <div className="d-flex">
                    <button className="zoom btn btn-info" onClick={() => navigate(`/pizza/${product.id}`)}>Ver más</button>
                    <button className={`btn btn-${added ? 'warning' : 'danger'} zoom`} onClick={handleAddToCart} disabled={added}>
                        {added ? 'Producto Añadido' : 'Añadir'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;

