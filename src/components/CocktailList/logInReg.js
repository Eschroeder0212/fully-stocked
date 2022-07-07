import React, { useContext, useState, createContext } from 'react';
import { useNavigate } from "react-router-dom";
import { useLogin } from './LoginContext';







export const Login = () => {
    const [userId, setUserId] = useLogin();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [warningMessage, setWarningMessage] = useState('')

    const navigate = useNavigate();
    const handleSubmit = () => {
        fetch("http://localhost:3004/users").then(response => response.json()).then(
            (users) => {
                const matchingUser = users.find(user => user.email === email && user.password === password)
                if (matchingUser) {
                    setUserId(matchingUser.id)
                    navigate("/cocktails")

                }
                else {
                    setWarningMessage("login not recognized")
                }
            }
        )
    }

    const handleRegister = () => {
        fetch("http://localhost:3004/users").then(response => response.json()).then(
            (users) => {
                const matchingUser = users.find(user => user.email === email)
                if (matchingUser) {
                    setWarningMessage('email is already registered')
                }
                else {
                    const postOptions = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"

                        },
                        body: JSON.stringify({
                            email, password
                        })

                    }
                    fetch("http://localhost:3004/users", postOptions).then(response => response.json()).then(
                        user => {
                            setUserId(user.id)
                            navigate("/cocktails");
                        }
                    )

                }
            }
        )
    }   


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
            <button onClick={handleRegister}>Register</button>
            <div className='warning-message'>
                {warningMessage}
            </div>
        </div>
    );
};







