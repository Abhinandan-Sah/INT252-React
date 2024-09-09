import React from 'react'

const Zoo = (props) => {
    const data = props.Data;

  return (
    <div>
        <h1>Animal Name = {data?.title}</h1>
        <h1>Species Name = {data?.species}</h1>
    </div>
  )
}

export default Zoo