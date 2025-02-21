import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Navbar from "../components/Navbar";
import { getAllPizzas } from '../services/pizza';
import { addItem } from '../features/cartSilce';
import config from '../config';

// Pizza component
export function Pizza({ item }) {
    const dispatch = useDispatch();

    const getTitle = () => {
        return item && item.name.length > 20
            ? item.name.substring(0, 20) + '...'
            : item ? item.name : '';
    };

    const getDetails = () => {
        return item && item.details.length > 70
            ? item.details.substring(0, 70) + '...'
            : item ? item.details : '';
    };
    
    
    

    const addItemToCart = () => {
        if (item) {
            dispatch(addItem({ ...item, quantity: 1 }));
            toast.success(`${item.name} added to cart!`);
        }
    };

    return (
        <div className="pizza-card">
            <img
                className="card-img-top"
                // src={item ? `${config.server}/images/${item.image}` : ''}
                // alt={item ? item.name : 'Pizza'}
                src={config.server +'/'+item.image}
                alt=''
            />
            <div className="card-body">
                <h5 className="card-title">{getTitle()}</h5>
                <div className="card-text">{getDetails()}</div>
                <div className="price">Price: ₹{item ? item.price : '0.00'}</div>
                <button 
                    onClick={addItemToCart} 
                    className="btn btn-primary" 
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

// Home component
export function Home() {
    const [items, setItems] = useState([]);

    const loadAllPizzas = async () => {
        const result = await getAllPizzas();
        if (result['status'] == 'success') {
            setItems(result['data']);
        } else {
            toast.error(result['error']);
        }
    };

    useEffect(() => {
        loadAllPizzas();
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className='title'>Welcome to the Pizza shop</h1>
                <div className="row">
                    {items.length ? items.map(item => (
                        <div className="col-12 col-md-6 col-lg-3 mb-4" key={item['id']}>
                            <Pizza item={item} />
                        </div>
                    )) : <p>No pizzas available</p>}
                </div>
            </div>
        </>
    );
}

export default Home;

