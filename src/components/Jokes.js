import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

function Jokes(props) {
    const [jokes, setJokes] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('/jokes')
        .then(res => {
            console.log(res)
            setJokes(res.data)
        })
        .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1>Jokes</h1>
            {jokes.map(joke => (
                <p key={joke.id}>{joke.joke}</p>
            ))
            }
        </div>
    )
}
export default Jokes