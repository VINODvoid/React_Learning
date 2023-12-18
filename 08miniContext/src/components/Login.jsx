import React from 'react'
import UserContext from '../context/UserContext.js'
const Login = () => {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const {setUser} = React.useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
      }
        
    
  return (
    <div>
        <h1>Login</h1>
        <input 
        type="text" 
        placeholder='username'
        value={username}
        onChange={(e) =>{setUsername(e.target.value) ; console.log(e.target.value) }  }
        />
        <input type="text" placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        
        />
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
