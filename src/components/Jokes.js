import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

function Jokes(props) {
    const [jokes, setJokes] = useState([])

    useEffect( async () => {
        axiosWithAuth()
        .get('/jokes')
        .then(res => {
            console.log(res)
            setJokes(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    let token = localStorage.getItem('token')
    return (
        <div>
            <h1>Jokes</h1>
            {
               token ? 
                jokes.map(joke => (
                    <p key={joke.id}>{joke.joke}</p>
                ))
            :
                window.alert('Must be logged in!')
            }
        </div>
    )
}
export default Jokes