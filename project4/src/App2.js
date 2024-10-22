import React, { useState } from 'react'

export default function App2() {
    const [car, setCar] = useState({
        model: "Toyota",
        color: "Blue",
        year: 1945,
        price: "10k"
    });

    const handleChange = () => {
        setCar(oldinfo => {
            return {...oldinfo, color: "Red", engine: "4200HP"}
        })
    }
    console.log(car);
    
  return (
    <>
        <h1>Car Information</h1>
        <p>
            <b>Model: </b>{car.model} <br /> 
            <b>Color: </b>{car.color}<br /> 
            <b>Year: </b>{car.year}<br /> 
            <b>Price: </b>{car.price}
        </p>
        <button onClick={handleChange}>Click Here</button>
    </>
  )
}
