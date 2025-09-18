import React, {useContext, useState} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    
    const handleOnSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    return (
    <div>
        <h2>Login</h2>
        <input type="text" onChange={(e) => setUsername(e.target.value)}
         placeholder='john Doe' value={username}  />
        <input type="password" value={password} placeholder='password' 
        onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" onClick={handleOnSubmit}>Login</button>
    </div>
  )
}

export default Login