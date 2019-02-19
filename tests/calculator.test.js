import React from 'react'
import { render, fireEvent, waitForDomChange, act } from 'react-testing-library'

import Calculator from '../src/calculator'

test( 'value should update asyncronously on button click', () => {
  const { getByText, getByTestId } = render( <Calculator /> )
  const btn = getByText( /calculate/i )
  const output = getByTestId('output')
  expect(output).toHaveTextContent('1')
  fireEvent.click( btn )
  waitForDomChange({ output })
    .then( () => {
      console.log('FAIL: we never get here!')
      expect(output).toHaveTextContent('2')
    })
})