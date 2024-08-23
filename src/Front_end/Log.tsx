import React, { useState } from "react";
import Header from "./Header";
import './Log.css'
import log_image from "../assets/image/log.jpg"
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Form {
    Name: String,
    Number: String,
    Mail: String,
    Password: String
}

function log() {

    const [FormData, setFormData] = useState({
        Name: "",
        Number: "",
        Mail: "",
        Password: ""
    })
    const [error, setError] = useState({
        Name: "",
        Number: "",
        Mail: "",
        Password: ""


    })
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...FormData,
            [name]: value
        })
    }

    const navigate6 = useNavigate()
    const PostData = async () => {
        if (!FormData.Name && !FormData.Number && !FormData.Mail && !FormData.Password) {
            setError({
                ...error,
                Name: "Enter the name",
                Number: "Enter the Number",
                Mail: "Enter the email id",
                Password: "Enter the password"

            })
        }
        else {
            alert(" Your Account Created")
            await axios.post("http://localhost:3001/PostData", FormData)
            .then((e) => console.log(e.data))
            .catch((err) => console.log(err))
            navigate6("/Search")
        }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log(FormData) 
    }

    return (
        <div>
            <Header></Header>
            <div className="log_page">
                <div className="log_design">
                    <div className="l1">
                        <img src={log_image}></img>
                    </div>
                    <div className="l2">
                        <div className="log_tit">
                            <p className="log_h">Create Your Account !</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="name">
                                <input
                                    type="text1"
                                    name="Name"
                                    autoComplete="off"
                                    placeholder="Your Name"
                                    value={FormData.Name}
                                    onChange={handleChange}
                                >
                                </input>
                                <p className="errorPara">{error.Name}</p>
                            </div>
                            <div className="mobile">
                                <input
                                    type="number"
                                    name="Number"
                                    autoComplete="off"
                                    placeholder="Mobile.no"
                                    value={FormData.Number}
                                    onChange={handleChange}
                                >
                                </input>
                                <p className="errorPara">{error.Number}</p>
                            </div>
                            <div className="mail">
                                <input
                                    type="email"
                                    name="Mail"
                                    autoComplete="off"
                                    placeholder="Mail : Id"
                                    value={FormData.Mail}
                                    onChange={handleChange}
                                >
                                </input>
                                <p className="errorPara">{error.Mail}</p>
                            </div>
                            <div className="pass">
                                <input
                                    type="Password"
                                    name="Password"
                                    autoComplete="off"
                                    placeholder="Password"
                                    value={FormData.Password}
                                    onChange={handleChange}
                                >
                                </input>
                                <p className="errorPara">{error.Password}</p>
                            </div>
                            <button type="submit" className="l_btn" onClick={PostData}>Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default log