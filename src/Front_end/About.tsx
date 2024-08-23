import React from "react";
import Header from "./Header";
import './About.css'
import burger from '../assets/icon/burger.png'
import truck from '../assets/icon/truck.png'
import detail from '../assets/icon/order.png'
import Footer from "./Footer";


function About() {
    return (
        <div>
            <div className="About_detail">
                <Header></Header>
                <div className="about_para">
                    <h1 className="about_tit">Welcome To Food Scoff</h1>
                </div>
                <div className="para1">
                    <p className="about_p">
                        Welcome to Food Scoff, your go-to destination for delicious and convenient food delivery!
                    </p>
                    <p className="about_p1">
                        At Food Scoff, we believe that enjoying a great meal should be effortless and delightful. Our mission is to bring a diverse selection of mouth-watering dishes from your favorite local restaurants right to your doorstep.
                    </p>
                    <p className="about_p2">
                        Whether you're craving comfort food, a healthy bite, or something adventurous, we've got you covered. Experience the joy of dining without leaving the comfort of your home with Food Scoff, where every bite is a delight!
                    </p>
                    <p className="about_p3">
                        At Food Scoff, we are dedicated to providing exceptional service, ensuring that every order is delivered hot and fresh to your doorstep. Join us in celebrating the joy of great food, effortlessly delivered!
                    </p>
                </div>
                <div className="orders">
                    <h1 className="order_tit">Our Online Food Ordering System Caters</h1>
                </div>
                <div className="order_detail">
                    <div className="logo1">
                        <img src={burger}></img>
                        <h1 className="logo_tit">Burger Ordering System</h1>
                    </div>
                    <div className="logo2">
                        <img src={truck}></img>
                        <h1 className="logo_tit1">Fast Food Ordering System</h1>
                    </div>
                    <div className="logo3">
                        <img src={detail}></img>
                        <h1 className="logo_tit2">Food Scoff Ordering System</h1>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}
export default About