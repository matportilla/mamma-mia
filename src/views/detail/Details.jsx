// import React, { useContext, useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import PizzaContext from '../../context/PizzaContext';
// import './Details.css';

// const Details = () => {
//     const { id } = useParams();
//     const { addToCart, pizzaData } = useContext(PizzaContext);
//     const selectedPizza = pizzaData.find((pizza) => pizza.id === id);
//     const [added, setAdded] = useState(false);

//     useEffect(() => {
//         setAdded(false);
//     }, [id]);

//     const handleAddToCart = (product) => {
//         addToCart(product);
//         setAdded(true);
//         setTimeout(() => setAdded(false), 1000);
//     };

//     return (
//         <div className="contenedor-details">
//             {selectedPizza && (
//                 <div className="detailCard">
//                     <div className="card col-lg-3 col-md-6" key={selectedPizza.id}>
//                         <div>
//                             <img
//                                 className="card-img-top"
//                                 src={selectedPizza.img}
//                                 alt={selectedPizza.name}
//                             />
//                         </div>
//                         <div className="pizzaBody">
//                             <h5>{selectedPizza.name}</h5>
//                             <p className="description">{selectedPizza.desc}</p>
//                             <hr />
//                             <ul>
//                                 {selectedPizza.ingredients.map((ingredient) => (
//                                     <li key={ingredient}>🍕 {ingredient}</li>
//                                 ))}
//                             </ul>
//                             <div className="precio-details">
//                                 <h3>${selectedPizza.price.toLocaleString('es-CL')}</h3>
//                                 <button
//                                     className={`btn ${added ? 'btn-warning' : 'btn-danger'}`}
//                                     onClick={() => handleAddToCart(selectedPizza)}
//                                     disabled={added}
//                                 >
//                                     {added ? 'Producto Añadido' : 'Añadir'}
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Details;

import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PizzaContext from '../../context/PizzaContext';
import './Details.css';

const Details = () => {
    const { id } = useParams();
    const { addToCart, pizzaData } = useContext(PizzaContext);
    const selectedPizza = pizzaData.find((pizza) => pizza.id === id);
    const [added, setAdded] = useState(false);

    useEffect(() => {
        setAdded(false);
    }, [id]);

    const handleAddToCart = (product) => {
        addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 1000);
    };

    return (
        <div className="contenedor-details">
            {selectedPizza && (
                <div className="detailCard">
                    <div className="card col-lg-3 col-md-6" key={selectedPizza.id}>
                        <div>
                            <img
                                className="card-img-top"
                                src={selectedPizza.img}
                                alt={selectedPizza.name}
                            />
                        </div>
                        <div className="pizzaBody">
                            <h5>{selectedPizza.name}</h5>
                            <p className="description">{selectedPizza.desc}</p>
                            <hr />
                            <ul>
                                {selectedPizza.ingredients.map((ingredient) => (
                                    <li key={ingredient}>🍕 {ingredient}</li>
                                ))}
                            </ul>
                            <div className="precio-details">
                                <h3>${selectedPizza.price.toLocaleString('es-CL')}</h3>
                                <button
                                    className={`btn ${added ? 'btn-warning' : 'btn-danger'}`}
                                    onClick={() => handleAddToCart(selectedPizza)}
                                    disabled={added}
                                >
                                    {added ? 'Producto Añadido' : 'Añadir'}
                                </button>
                                <Link to="/">
                                    <button className="btn btn-success">Ritorno</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Details;
