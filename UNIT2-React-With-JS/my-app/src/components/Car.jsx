import React from 'react'

const Car = ({cost, model}) => {
    let car1 = "audi";
    let car2 = "mustang";
    let color = "Red";
  return (
    <>
        <h1>{car1}</h1>
        <h1>{car2}</h1>
        <h1>My car color is {color}</h1>
        <h2>{cost} dinar</h2>
    </>
  )
}

export default Car