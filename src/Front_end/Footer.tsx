import React from "react";
import './Footer.css'

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer_design">
                    <div className="footer_part">
                        <div className="foot1">
                            <h1 className="foot_head"> Food Scoff</h1>
                            <p className="foot_para">Welcome to Food Scoff, your go-to destination for delicious and convenient food delivery!At Food Scoff, we believe that enjoying a great meal should be effortless and delightful.</p>

                        </div>
                        <div className="foot2">
                            <h1 className="foot_head2">Pages</h1>
                            <div className="tag">
                                <li>Home</li>
                                <li>Search</li>
                                <li>About</li>
                            </div>
                        </div>
                        <div className="foot3">
                            <h1 className="foot_head3">Address</h1>
                            <p className="address">
                                763, 13 ASP Complex<br></br>
                                Vinobha Street,Erode<br></br>
                                Tamil Nadu
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer