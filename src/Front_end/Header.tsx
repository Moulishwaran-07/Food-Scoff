import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import brand from '../assets/brand/brand2.png'
import './Header.css'



function Header() {

    const Navigate0 = useNavigate()
    const Home = () => { Navigate0('/') }

    const Navigate1 = useNavigate()
    const Search = () => { Navigate1("/Search") }

    const Navigate3 = useNavigate()
    const About =()=>{Navigate3("/About")}

    const Navigate5 = useNavigate()
    const Log =()=>{Navigate5('/Log')}
    return (
        <div>

            <div className="Navigation">
                <div className="top">
                    <div className="nav1">
                        <img src={brand} onClick={Home}></img>
                    </div>
                    <div className="nav2">
                        <button className="n1" onClick={Home}>Home</button>
                        <button className="n2" onClick={Search}>Search</button>
                        <button className="n3" onClick={About}>About</button>
                    </div>
                    <div className="nav3">
                        <button className="n4" onClick={Log}>Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header