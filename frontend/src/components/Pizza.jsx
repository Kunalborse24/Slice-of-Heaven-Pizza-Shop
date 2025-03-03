import { addItem } from '../features/cartSilce';
import { useDispatch } from 'react-redux';
import config from '../config';
import { toast } from 'react-toastify';
import '../css/Pizza.css';
export function Pizza({ item }) {
    const dispatch = useDispatch();

    const getTitle = () => {
        return item && item.name.length > 20
            ? item.name.substring(0, 20) + '...'
            : item ? item.name : '';
    };

    const getDetails = () => {
        return item && item.details.length > 50
            ? item.details.substring(0, 50) + '...'
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
export default Pizza;