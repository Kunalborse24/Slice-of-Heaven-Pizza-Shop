import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getAllOrder } from "../services/order";
// import { getAllOrder } from "../services/order";
import { toast } from "react-toastify";
import OrderDetailsModal  from "../components/OrderDetailsModal";
import '../css/Orders.css'; 

export function Orders() {
    const [orders, setOrders] = useState([]);
    const [selectedOrderId, setSelectedOrderId] = useState(null);
   
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
    const formatPrice = (price) => {
        return `₹${price.toFixed(2)}`;
    };
    // const Details= async(orderId)=>{
    //     try {
    //                 const result = await OrderDetails(orderId);
    //                 if (result.status === 'success') {
    //                      const details = result.data;
    //                      console.log("order Details",details)
    //                 } else {
    //                     toast.error(result.error || "An error occurred while featching the order Details");
    //                 }
    //             } catch (error) {
    //                 toast.error("An unexpected error occurred");
    //             }

    // };

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
                                    <p className="order-status">Status: {order.status || "DELIVERED"}</p>
                                </div>
                                <div className="order-card-footer">
                                    <button onClick={() => setSelectedOrderId(order.id)} className="btn btn-details">Details</button>
                                    {/* <button className="btn btn-delete">Delete</button> */}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {selectedOrderId && (
                <OrderDetailsModal
                    orderId={selectedOrderId}
                    onClose={() => setSelectedOrderId(null)}
                />
            )}
        </>
    );
}
export default Orders;
