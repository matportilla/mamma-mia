import { useContext } from 'react';
import PizzaContext from '../../context/PizzaContext';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';


function Home() {
    const { pizzaData } = useContext(PizzaContext);

    return (
        <div className='bg-main'>
            <Header />
            <Menu data={pizzaData} />

        </div>
    );
}

export default Home;