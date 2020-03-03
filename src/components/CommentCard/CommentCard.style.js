import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  img {
    width: 32px;
    height: 32px;
    margin: 0 0px 0 20px 0px;
  }
`

export const UserName = styled.div`
  display: contents;
  font-weight: bold;
  margin-right: 10px;
`

export const PostComment = styled.div`
  display: flex;
  margin: 0 20px;
  background-color: #EEEEEE;
  padding: 10px;
  border-radius: 10px;
`
