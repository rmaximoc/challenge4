import React from 'react'
import { Container, PostComment, UserName } from './CommentCard.style'

const CommentCard = ({ data }) => (
  <Container>
    <img src={data.author.avatar} alt="avatar"/>
    <PostComment>
      <UserName>
        {`${data.author.name} `}
      </UserName>
      {data.content}
    </PostComment>
  </Container>
)

export default CommentCard
