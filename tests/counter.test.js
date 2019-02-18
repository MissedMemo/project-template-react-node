import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import Counter from '../src/counter'

test('button should increment count', () => {
  const { container, getByTestId } = render( <Counter /> )
  const btn = container.querySelector('button')
  const output = getByTestId('output')
  expect( output ).toHaveTextContent('0')
  fireEvent.click(btn)
  expect( output ).toHaveTextContent('1')
})