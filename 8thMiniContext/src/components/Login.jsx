import React, {useState, useContext} from 'react'
import UserContext from './context/UserContext'

const Login = () => {

    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const {setUser} =useContext(UserContext)

    const handleSubmit = (e) => {
      e.preventDefault()
      setUser({username, password})
        //setUser will be adding an object which will have access to password and username, whatever you are entering it has that
    }

  return (
    <div>
        <h2>Login</h2>
        <input 
        type="text" 
        value={username}    //  you will get value from username 
        placeholder='Username'
        onChange={(e) => setUsername(e.target.value)}   // at the time of changing this is the input field for username 
        /> 
        {" "}
        <input 
        type="password" 
        value = {password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'/>
        <button
        onClick={handleSubmit}>
            Submit</button>
    </div>
  )
}

export default Login