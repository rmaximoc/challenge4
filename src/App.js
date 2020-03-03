import React, { useState } from 'react'
import Header from './components/Header/Header'
import CardWrapper from './components/CardWrapper/CardWrapper'
import GlobalStyle from './global.style'
import data from './data'

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    {data.posts.map(card => <CardWrapper key={card.id} data={card} />)}
  </>
)

export default App
