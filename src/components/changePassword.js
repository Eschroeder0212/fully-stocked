import { useEffect, useState } from "react"
import { useLogin } from "./CocktailList/LoginContext"
import { Navigate } from "react-router-dom"

export const ChangePassword = () => {
    const [userId] = useLogin()
    const [user, setUser] = useState({})
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [warningMessage, setWarningMessage] = useState('')

    useEffect( () => {
        fetch(`http://localhost:3004/users/${userId}`).then(response => response.json()).then(setUser)
    }, [])

    const handleChangePassword = () => {
        if (currentPassword !== user.password){
            setWarningMessage('current password does not match')
        }
        else{
            const putOptions = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"

                },
                body: JSON.stringify({
                    ...user, password:newPassword
                })

            }
            fetch(`http://localhost:3004/users/${userId}`, putOptions).then(response => response.json()).then(
                userResponse => {
                    if(userResponse.password === newPassword){
                        setWarningMessage('password changed successfully')
                    }
                }
            )
        }
    }

        if(userId === 0) return <Navigate to= "/"></Navigate>
        return (
            <div>
                <div>
                    <label for = "current-password">Current Password</label>
                <input
                    type="password"
                    name="current-password"
                    value={currentPassword}
                    autoComplete="off"
                    required
                    onChange={(evt) => setCurrentPassword(evt.target.value)}
                />
                </div>
               <div>
               <label for = "new-password">New Password</label>
               <input
                    type="password"
                    name="new-password"
                    value={newPassword}
                    autoComplete="off"
                    required
                    onChange={(evt) => setNewPassword(evt.target.value)}
                />
               </div>
               
                <button onClick={handleChangePassword}>Change Password</button>
                <div className='warning-message'>
                    {warningMessage}
                </div>
            </div>
        );
    
}