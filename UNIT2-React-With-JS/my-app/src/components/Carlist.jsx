import React from 'react'

const Carlist = () => {
    const cars =[
        {brand: "Honda", model: "Verna"},
        {brand: "Toyota", model: "Hyrder"},
        {brand: "Audi", model: "kushaq"},
    ]
  return (
    <div>
        <h1>My Car Details</h1>
        <p>This is my car collection</p>
        <ul>
            {cars.map((car)=>(
                <li key={car.brand}>
                    {car.brand} = {car.model}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Carlist