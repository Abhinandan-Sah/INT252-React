import React from 'react'
import PropsType from 'prop-types'

const Practice2 = (props) => {
    const handleClick = () => {
        alert(`You have booked a room in ${props.data.name}`)
    }
  return (
    <div>
        <h1>{props.data.name}</h1>
        <h1>{props.data.address}</h1>
        <h1>{props.data.roomType}</h1>
        <button onClick= {handleClick}>book</button>
    </div>
  )
}

Practice2.propTypes = {
    data: PropsType.object
}

export default Practice2