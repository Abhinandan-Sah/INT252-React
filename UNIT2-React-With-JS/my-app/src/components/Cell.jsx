import React from 'react'

const Cell = (props) => {
    const {title, genra}= props;
  return (
    <div>
        <p>
            {title} = {genra}
        </p>
    </div>
  )
}

export default Cell