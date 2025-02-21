// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import {placeOrder, getAllOrder } from "../services/order";
// import { toast } from "react-toastify";

// export function Orders() {
//     const [orders, setOrders] = useState([]);

//     const loadOrders = async () => {
//         const result = await getAllOrder();
//         if (result.status == 'success') {
//             setOrders(result.data);
//         } else {
//             toast.error(result.error);
//         }
//     }

//     useEffect(() => {
//         loadOrders();
//     }, []);

//     return (
//         <>
//             <Navbar />
//             <div className="container">
//                 <h1 className='title'>Welcome to the Orders Page</h1>
//                 {orders.length == 0 && (
//                     <h5 style={{ textAlign: 'center' }}>There are no Orders</h5>
//                 )} 
//                    {orders.length > 0 && (
//                     <table className="table table-striped">
//                         <thead>
//                             <tr>
//                                 <th>Order ID</th>
//                                 <th>Order No</th>
//                                 <th>Date</th>
//                                 <th>Total Amount</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {orders.map((order, index) => (
//                                 <tr key={order.id || index}>
//                                     <td>{index + 1}</td>
//                                     <td>{order.id}</td>
//                                     <td>{order.createdTimeStamp}</td>
//                                     <td>{order.totalAmount}</td>
//                                     <td>
//                                         <button className="btn btn-success">Details</button>
//                                         <button className="btn btn-danger ms-2">Delete</button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 )}
//             </div>
//         </>
//     );
// }

// export default Orders;

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { placeOrder, getAllOrder } from "../services/order";
import { toast } from "react-toastify";
import '../css/Orders.css';  // Import custom CSS for styling

export function Orders() {
    const [orders, setOrders] = useState([]);

    const loadOrders = async () => {
        const result = await getAllOrder();
        if (result.status === 'success') {
            setOrders(result.data);
        } else {
            toast.error(result.error);
        }
    };

    useEffect(() => {
        loadOrders();
    }, []);

    // Function to format price with ₹ symbol
    const formatPrice = (price) => {
        return `₹${price.toFixed(2)}`;
    };

    return (
        <>
            <Navbar />
            <div className="orders-container">
                <h1 className="title">Your Orders</h1>
                {orders.length === 0 ? (
                    <h5 className="empty-message">No orders found</h5>
                ) : (
                    <div className="orders-grid">
                        {orders.map((order, index) => (
                            <div key={order.id || index} className="order-card">
                                <div className="order-card-header">
                                    <span className="order-id">Order ID: {order.id}</span>
                                    <span className="order-date">{order.createdTimeStamp}</span>
                                </div>
                                <div className="order-card-body">
                                    <p className="order-total">Total Amount: {formatPrice(order.totalAmount)}</p>
                                    <p className="order-status">Status: {order.status || "Pending"}</p>
                                </div>
                                <div className="order-card-footer">
                                    <button className="btn btn-details">Details</button>
                                    <button className="btn btn-delete">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default Orders;
