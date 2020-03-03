import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px auto;
  max-width: 700px;
  min-height: 200px;
  background-color: white;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.10);

  hr {
    width: 100%;
    margin: 10px;
  }

  img {
    width: 32px;
    height: 32px;
  }
`
