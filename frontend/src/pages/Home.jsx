import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Navbar from "../components/Navbar";
import { getAllPizzas } from '../services/pizza';
import Pizza from "../components/Pizza";
import '../css/Home.css';
// Home component

export function Home() {
    const [items, setItems] = useState([]);

    const loadAllPizzas = async () => {
        const result = await getAllPizzas();
        if (result['status'] === 'success') {
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

