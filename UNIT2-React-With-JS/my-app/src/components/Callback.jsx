import React, { useCallback, useState } from 'react'

const Callback = () => {
    const [count, setCount] = useState(0);

    const newFn = useCallback(()=>{}, [count])
  return (
    <div>
        
    </div>
  )
}

export default Callback