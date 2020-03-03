import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  img {
    width: 32px;
    height: 32px;
    margin: 0 20px 10px 0px;
  }
`

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserContent = styled.div`
  display: flex;
  flex-direction: row;
`

export const PostDate = styled.div`
  font-weight: 100;
  font-size: 12px;
  color: #bababa;
`

export const UserName = styled.div`
  font-weight: bold;
`

export const PostText = styled.div`
  display: flex;
  font-weight: 100;

`