import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([])
    const [hello, setHello] = useState('Hello les amis')

    //Le useEffect se joue lorsque le composant est monté
    useEffect(() => { 
        axios
        .get("https://restcountries.com/v3.1/all")
        .then((res) => setData(res.data))
    }, [])

    return (
        <div className='countries'>
            <h1>COUNTRIES</h1>
            <ul>
                {
                    data.map((country, index)=> (
                        <Card key={index}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default Countries;