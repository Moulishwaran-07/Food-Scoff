import React, { useState } from "react";
import axios from 'axios';
import Header from "./Header";
import './Cart.css';
import { useDataContext } from "./DataProvider";
import { useNavigate } from "react-router-dom";



function Cart() {
    const { data } = useDataContext();
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const navigate7 = useNavigate();

    const handleOrder = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!address.trim()) {
            setError('Please enter your address.');
            return;
        }
        if (!phoneNumber.trim()) {
            setError('Please enter your mobile number.');
            return;
        }
        if (!data || data.length === 0) {
            setError('Your cart is empty.');
            return;
        }
        setError('');
        const orderData = {
            address,
            items: data.map(item => ({
                id: item.id,
                title: item.title,
                price: parseFloat(item.price.replace('₹', '').trim()),
                image: item.image
            }))
        };


        try {
            const response = await axios.post('http://localhost:3002/Post', orderData);
            window.alert('Your order is placed successfully!');
            navigate7('/');
            window.location.reload();
        } catch (err) {
            console.error(err);
            setError('Failed to place order. Please try again.');
        }
    };

    return (
        <div>
            <Header />
            <h1 className="o_detail">Your Order Items</h1>
            <div className="o_full">
                <div className="o_tit1">
                    <p>Items</p>
                    <p>Name</p>
                    <p>Price</p>
                </div>
            </div>

            <div className="o_grid">
                <div className="order_details">
                    {data && data.length > 0 ? (
                        <div className="o_food">
                            {data.map((item) => (
                                <div className="list" key={item.id}>
                                    <div className="o_list">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="o_list1">
                                        <p className="o_tit">{item.title}</p>
                                    </div>
                                    <div className="o_list2">
                                        <p className="o_price">{item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="no_item">No items in the cart.</p>
                    )}
                </div>
                <div className="add_detail">
                    <p className="a1">Your Address :</p>
                    <textarea
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter your delivery address here."
                    ></textarea>
                    <p className="a1">Mobile Number:</p>
                    <input
                        type="number"
                        name="Number"
                        autoComplete="off"
                        placeholder="Mobile.no"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    >
                    </input>
                    {error && <p className="err_code">{error}</p>}
                    <div className="btn_1">
                        <button className="o_btn" onClick={handleOrder}>
                            Order
                        </button>
                    </div>
                    

                </div>
            </div>
        </div>
    );
}

export default Cart;
