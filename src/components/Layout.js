import { h } from 'preact'
import tw, { styled, GlobalStyles, theme } from 'twin.macro'
import { createGlobalStyles } from 'goober/global'

import Header from 'components/Header'
import Footer from 'components/Footer'

const GlobalsExtra = createGlobalStyles`
  body {
    background-color: ${theme`colors.dark`};
  }
`
const Container = styled.div([tw`text-white bg-dark`])

const Content = styled.main([
  {
    'min-height': '90vh',
  },
])

const App = ({ children, layout: { menu }, url }) => (
  <Container>
    <GlobalStyles />
    <GlobalsExtra />
    <Header menu={menu} url={url} />
    <Content>{children}</Content>
    <Footer menu={menu} />
  </Container>
)

export default App
