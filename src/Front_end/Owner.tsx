import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import './Owner.css';
import shop from "../assets/image/res.jpg";

function Owner() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate8 = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const validUsername = "mouli";
        const validPassword = "mouli123";

        if (username === validUsername && password === validPassword) {
          
            navigate8("/Show"); 
        } else {
            
            setError("Invalid username or password.");
        }
    };

    return (
        <div>
            <Header />
            <div className="log_page1">
                <div className="log_design1">
                    <div className="l2">
                        <img src={shop} alt="Shop" />
                    </div>
                    <div className="l3">
                        <div className="log_tit1">
                            <p className="log_h1">Welcome Chief!</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="name2">
                                <input
                                    type="text2"
                                    name="name"
                                    autoComplete="off"
                                    placeholder="Your Name"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="pass1">
                                <input
                                    type="password"
                                    name="password"
                                    autoComplete="off"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            {error && <p className="error3">{error}</p>}

                            <button type="submit" className="l_btn1">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Owner;
