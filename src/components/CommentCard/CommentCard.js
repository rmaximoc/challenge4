import React from 'react'
import { Container, PostComment, UserName } from './CommentCard.style'
import avatar from '../../assets/images/avatar.png'

const CommentCard = ({ data }) => {
  console.log(data)
  return (
    <Container>
      <img src={avatar} alt="avatar"/>
      <PostComment>
        <UserName>
          {`${data.author.name} `}
        </UserName>
        {data.content}
      </PostComment>
    </Container>
  )
}

export default CommentCard
