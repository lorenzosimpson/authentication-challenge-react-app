import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Register = (props) => {
    const [credentials, setCredentials] = useState({})

const handleChange = (e) => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3300/api/auth/register', credentials)
    .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        props.history.push('/jokes')
    })
    .catch(err => console.log(err))
}
    return(
        <form onChange={handleChange} onSubmit={handleSubmit}>
            <h1>Register</h1>
            <input type='text' name='username' placeholder='username' />
            <input type='text' name='password' placeholder='password' />
            <button>submit</button>
        </form>
    )
}


export default Register;