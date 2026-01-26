import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react'

import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp', () => {
  test('should render firstName and lastName', () => {
    const { container } = render(<MyAwesomeApp/>);

    screen.debug()

    const h1 = container.querySelector('h1')
    const h3 = container.querySelector('h3')
    expect(h1?.innerHTML).toBe('Gloria')
    expect(h3?.innerHTML).toBe('Figueroa')
  })

  test('should render firstName and lastName', () => {
    render(<MyAwesomeApp/>);

    screen.debug()

    const h1 = screen.getByTestId('first-name-title')
    expect(h1?.innerHTML).toBe('Gloria')
  })
  test('should match snapshot', () => {
  const { container } = render(<MyAwesomeApp/>)

  expect(container).toMatchSnapshot()
})
})