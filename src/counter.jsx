import React, { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount( count +1 )
  }

  return <div>
    <button onClick={increment}>+1</button>
    <div>
      { count }
    </div>
  </div>
}

export default Counter