import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
                    data.map((country, index)=> <li key={index}>{country.translations.fra.common}</li>)
                }
            </ul>
        </div>
    );
};

export default Countries;