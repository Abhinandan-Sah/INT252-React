import React from 'react'
import ClassApple from './ClassApple';
import Mango from './Mango';

const Fruit = () => {
    const fruitShop = {name: "mango", color: "yellow"};
  return (
    <div>
        <ClassApple fruitShop={fruitShop} />
        {fruitShop.name!=undefined && fruitShop.color!=undefined ? <Mango fruitShop={fruitShop} /> : null}
    </div>
  )
}

export default Fruit;