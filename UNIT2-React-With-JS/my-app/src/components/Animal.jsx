import React from 'react'
import Zoo from './Zoo'

const Animal = () => {
    let data= {title: "Elephant", species: "mammal"};
  return (
    <div>
        <Zoo Data={data} />
    </div>
  )
}

export default Animal