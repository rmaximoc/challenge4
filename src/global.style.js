import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html, body, #Root {
    min-height: 100%;
    background-color: #f2f2f2;
  }

  * {
    font-family: 'Muli';
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
`