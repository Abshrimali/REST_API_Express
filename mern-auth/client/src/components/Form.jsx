
import React, { useState } from 'react'
import axios from "axios";


const Form = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");


    // Function to handle form submission and create a new user
    const registerUser = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/register", { name, email, password })
            .then((res) => {
                alert("Success: " + res.data.message);
                setName("");
                setEmail("");
                setPassword("");
            })
            .catch((error) => {
                const serverMessage = error.response?.data?.message
                    || "Something went wrong";
                alert("Error: " + serverMessage)
            });
    }

    // Render the registration form
    return (
        <div>
            <form onSubmit={registerUser}>
                <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>submit</button>
            </form>
        </div>
    );
}

export default Form
