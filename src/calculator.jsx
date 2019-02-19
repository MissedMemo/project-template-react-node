import React, { useState } from 'react'

const calculate = n => Promise.resolve( n * 2 )

const Calculator = () => {

  const [ num, setNum ] = useState(1)

  const recalculate = async () => {
    const n = await calculate(num)
    setNum(n)
  }

  return <>
    <button onClick={ recalculate }>Calculate</button>
    <div data-testid='output'>{ num }</div>
  </>
}

export default Calculator