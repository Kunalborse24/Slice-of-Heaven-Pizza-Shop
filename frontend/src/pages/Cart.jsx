// import { useDispatch, useSelector } from "react-redux";
// import Navbar from "../components/Navbar";
// import { useEffect, useState } from "react";
// import config from "../config";
// import { clear, updateQuantity } from "../features/cartSilce";
// import { placeOrder } from "../services/order";
// import { toast } from "react-toastify";

// export function Cart() {
//     const [total, setTotal] = useState(0);
//     const dispatch = useDispatch();
//     const cart = useSelector(state => state.cart);

//     useEffect(() => {
//         let totalAmount = 0;
//         for (const item of cart.items) {
//             totalAmount += item.price * item.quantity;
//         }
//         setTotal(totalAmount);
//     }, [cart.items]);

//     const onQuantityUpdate = (itemId, quantity) => {
//         if (quantity > 0) { // Ensure quantity is not less than 1
//             dispatch(updateQuantity({ itemId, quantity }));
//         }
//     };

//     const onPlaceOrder = async () => {
//         const token = sessionStorage.getItem('token');
//     console.log('Token before API call:', token); 
//         try {
//             const result = await placeOrder(cart.items, total);
//             if (result.status == 'success') {
//                 dispatch(clear());
//                 toast.success("Successfully placed the order");
//             } else {
//                 toast.error(result.error || "An error occurred while placing the order");
//             }
//         } catch (error) {
//             toast.error("An unexpected error occurred");
//         }
//     };

//     return (
//         <>
//             <Navbar />
//             <div className="container">
//                 <h1 className='title'>Cart</h1>
//                 {cart.items.length == 0 &&    (
//                     <h3 style={{ textAlign: 'center' }}>There are no items in the cart</h3>
//                 ) }
//                 {cart.items.length >0 && (
//                     <div>
//                         <table className="table table-striped">
//                             <thead>
//                                 <tr>
//                                     <th>No</th>
//                                     <th>Image</th>
//                                     <th>Name</th>
//                                     <th>Price</th>
//                                     <th>Quantity</th>
//                                     <th>Total</th>
//                                     <th>Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {cart.items.map((item) => (
//                                     <tr key={item.id}>
//                                         <td>{item.id}</td>
//                                         <td>
//                                             <img
//                                                 style={{ height: 200, width: 200 }}
//                                                 className="card-img-top"
//                                                  src={config.server +'/'+item.image}
//                                                    alt=''
//                                             />
//                                         </td>
//                                         <td>
//                                             <span className="card-title">{item.name}</span>
//                                             <br />
//                                             {item.details}
//                                         </td>
//                                         <td>{item.price.toFixed(2)}</td>
//                                         <td>{item.quantity}</td>
//                                         <td>{(item.price * item.quantity).toFixed(2)}</td>
//                                         <td>
//                                             <button
//                                                 onClick={() => onQuantityUpdate(item.id, item.quantity + 1)}
//                                                 className="btn btn-success btn-sm"
//                                             >
//                                                 +
//                                             </button>
//                                             <button
//                                                 onClick={() => onQuantityUpdate(item.id, item.quantity - 1)}
//                                                 className="btn btn-danger btn-sm ms-2"
//                                             >
//                                                 -
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                             <tfoot>
//                                 <tr>
//                                     <td className="card-title" colSpan='5' style={{ textAlign: 'right' }}>Total amount</td>
//                                     <td className="card-title">{total.toFixed(2)}</td>
//                                 </tr>
//                             </tfoot>
//                         </table>
//                         <button onClick={onPlaceOrder} className="btn btn-primary">Place Order</button>
//                     </div>
                  
//                 )}
               
//             </div>
//         </>
//     );
// }

// export default Cart;


import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import config from "../config";
import { clear, updateQuantity } from "../features/cartSilce";
import { placeOrder } from "../services/order";
import { toast } from "react-toastify";
import '../css/Cart.css';  // Import the custom CSS for styling

export function Cart() {
    const [total, setTotal] = useState(0);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        let totalAmount = 0;
        for (const item of cart.items) {
            totalAmount += item.price * item.quantity;
        }
        setTotal(totalAmount);
    }, [cart.items]);

    const onQuantityUpdate = (itemId, quantity) => {
        if (quantity > 0) { // Ensure quantity is not less than 1
            dispatch(updateQuantity({ itemId, quantity }));
        }
    };

    const onPlaceOrder = async () => {
        const token = sessionStorage.getItem('token');
        console.log('Token before API call:', token); 
        try {
            const result = await placeOrder(cart.items, total);
            if (result.status === 'success') {
                dispatch(clear());
                toast.success("Successfully placed the order");
            } else {
                toast.error(result.error || "An error occurred while placing the order");
            }
        } catch (error) {
            toast.error("An unexpected error occurred");
        }
    };

    // Function to format price with ₹ symbol
    const formatPrice = (price) => {
        return `₹${price.toFixed(2)}`;
    };

    return (
        <>
            <Navbar />
            <div className="cart-container">
                <h1 className="cart-title">Your Shopping Cart</h1>
                {cart.items.length === 0 && (
                    <h3 className="empty-cart">Your cart is empty</h3>
                )}
                {cart.items.length > 0 && (
                    <div className="cart-table-container">
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.items.map((item) => (
                                    <tr key={item.id} className="cart-item">
                                        <td>{item.id}</td>
                                        <td>
                                            <img
                                                className="item-image"
                                                src={config.server + '/' + item.image}
                                                alt={item.name}
                                            />
                                        </td>
                                        <td>
                                            <span className="item-name">{item.name}</span>
                                            <p className="item-details">{item.details}</p>
                                        </td>
                                        <td>{formatPrice(item.price)}</td> {/* Show price in ₹ */}
                                        <td>{item.quantity}</td>
                                        <td>{formatPrice(item.price * item.quantity)}</td> {/* Show total in ₹ */}
                                        <td className="actions">
                                            <button
                                                onClick={() => onQuantityUpdate(item.id, item.quantity + 1)}
                                                className="btn btn-increase"
                                            >
                                                +
                                            </button>
                                            <button
                                                onClick={() => onQuantityUpdate(item.id, item.quantity - 1)}
                                                className="btn btn-decrease"
                                            >
                                                -
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="5" className="total-label">Total Amount</td>
                                    <td className="total-price">{formatPrice(total)}</td> {/* Show total in ₹ */}
                                </tr>
                            </tfoot>
                        </table>
                        <div className="place-order-container">
                            <button onClick={onPlaceOrder} className="place-order-btn">Place Order</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Cart;

