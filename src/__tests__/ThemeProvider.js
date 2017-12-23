import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider, theme, Box } from '..'
import { Base } from '../ThemeProvider'

describe('ThemeProvider', () => {
  test('renders', () => {
    const json = renderer.create(<ThemeProvider />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Base component includes a font', () => {
    const json = renderer.create(<Base theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-family', theme.font)
  })
})
