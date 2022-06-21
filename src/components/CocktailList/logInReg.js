import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
 
export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const navigate = useNavigate();
    const handleSubmit = () => {
        console.log("here's the email", email);
        console.log("here's the password. shhh!", password);
        navigate("/cocktails");
    };
 
    return (
        <div>
            <input
                type="email"
                name="email"
                value={email}
                placeholder="email@example.com"
                required
                onChange={(evt) => setEmail(evt.target.value)}
            />
            <input
                type="password"
                name="password"
                value={password}
                autoComplete="off"
                placeholder="******"
                required
                onChange={(evt) => setPassword(evt.target.value)}
            />
            <button onClick={handleSubmit}>Log In</button>
        </div>
    );
};