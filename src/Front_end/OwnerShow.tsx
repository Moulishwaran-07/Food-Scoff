// import React, { useEffect, useState } from "react";
// import './Show.css'

// type Item = {
//     id: string;
//     title: string;
//     price: number;
//     image: string;
// };

// type Order = {
//     address: string;
//     orderDate: string;
//     items: Item[];
// };

// function Show() {

//     const [orders, setOrders] = useState<Order[]>([]);

//     useEffect(() => {
//         fetch('http://localhost:3002/orders')
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log(data);
//                 setOrders(data);
//             })
//             .catch((error) => console.error("Error fetching orders:", error));
//     }, []);


//     return (
//         <div className="item_show">
        
//             <h2 className="show_tit">Order List</h2>
//             <div className="all_show">
//                 <div className="show_head">
//                     <p className="s1">Orders:id</p>
//                     <p className="s1">Address</p>
//                     <p className="s1">Date</p>
//                     <p className="s1">title</p>
//                     <p className="s1">Food</p>
//                     <p className="s1">Price</p>
//                 </div>
//                 <hr></hr>
//             {orders.length > 0 ? (
//                     orders.map((order, index) => (
//                         <div key={index} className="show_item">
//                             <p className="s_tit">Order # {index + 1}</p>
//                             <p className="s_para"> {order.address}</p>
//                             <p className="s_date">{new Date(order.orderDate).toLocaleString()}</p>
                            
//                            <div className="show_map">
//                                 {order.items.map((item, idx) => (
//                                     <div key={idx} className="show1">
//                                         <p className="s_title">{item.title}</p>
//                                         <img src={item.image} alt={item.title} className="s_img"/>
//                                         <p className="s_price">{item.price} ₹</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No orders found</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Show;

import React, { useEffect, useState } from "react";
import './Show.css';

type Item = {
    id: string;
    title: string;
    price: number;
    image: string;
};

type Order = {
    _id: string; 
    address: string;
    orderDate: string;
    items: Item[];
};

function Show() {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        fetch('http://localhost:3002/orders')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setOrders(data);
            })
            .catch((error) => console.error("Error fetching orders:", error));
    }, []);

    const handleDelete = (id: string) => {
        fetch(`http://localhost:3002/orders/${id}`, {
            method: 'DELETE',
        })
        .then((response) => {
            if (response.ok) {
                setOrders((prevOrders) => prevOrders.filter((order) => order._id !== id));
            } else {
                console.error("Error deleting order");
            }
        })
        .catch((error) => console.error("Error deleting order:", error));
    };

    return (
        <div className="item_show">
            <h2 className="show_tit">Order List</h2>
            <div className="all_show">
                <div className="show_head">
                    <p className="s1">Orders:id</p>
                    <p className="s1">Address</p>
                    <p className="s1">Date</p>
                    <p className="s1">Title</p>
                    <p className="s1">Food</p>
                    <p className="s1">Price</p>
                    
                </div>
                <hr  className="s_line"/>
                {orders.length > 0 ? (
                    orders.map((order, index) => (
                        <div key={order._id} className="show_item">
                            <p className="s_tit">Order # {index + 1}</p>
                            <p className="s_para">{order.address}</p>
                            <p className="s_date">{new Date(order.orderDate).toLocaleString()}</p>
                            <div className="show_map">
                                {order.items.map((item, idx) => (
                                    <div key={idx} className="show1">
                                        <p className="s_title">{item.title}</p>
                                        <img src={item.image} alt={item.title} className="s_img" />
                                        <p className="s_price">{item.price} ₹</p>
                                    </div>
                                ))}
                            </div>
                            <button className="delete_btn" onClick={() => handleDelete(order._id)}>Delete Order</button>
                        </div>
                    ))
                ) : (
                    <p className="show_p">No orders found</p>
                )}
            </div>
        </div>
    );
}

export default Show;



