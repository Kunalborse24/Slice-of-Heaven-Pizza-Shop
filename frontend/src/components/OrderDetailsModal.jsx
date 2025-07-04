import React, { useEffect, useState } from 'react';
import { OrderDetails } from '../services/order';
import { toast } from 'react-toastify';
import '../css/OrderDetailsModal.css'; 

const OrderDetailsModal = ({ orderId, onClose }) => {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const result = await OrderDetails(orderId);
                if (result.status === 'success') {
                    setDetails(result.data);
                } else {
                    toast.error(result.error || 'Failed to fetch order details');
                }
            } catch (error) {
                toast.error('Unexpected error while fetching order details');
            } finally {
                setLoading(false);
            }
        };

        fetchDetails();
    }, [orderId]);

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Order Details - #{orderId}</h3>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        {details.length === 0 ? (
                            <p>No items in this order.</p>
                        ) : (
                            <table className="details-table">
                                <thead>
                                    <tr>
                                        <th>Pizza ID</th>
                                        <th>Quantity</th>
                                        <th>Total Amount</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {details.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.pizzaId}</td>
                                            <td>{item.quantity}</td>
                                            <td>₹{item.totalAmount}</td>
                                            <td>{new Date(item.createdTimestamp).toLocaleString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </>
                )}
               <div className="modal-close-icon" onClick={onClose}>
                    &times;
                </div>

            </div>
        </div>
    );
};

export default OrderDetailsModal;
