import React from 'react'
import {
  Container,
  PostText,
  UserName,
  UserContent,
  PostDate,
  PostInfo
} from './PostCard.style'

const PostCard = ({ data }) => (
  <Container>
    <UserContent>
      <img src={data.author.avatar} alt="avatar"/>
      <PostInfo>
        <UserName>
          {data.author.name}
        </UserName>
        <PostDate>
          {data.date}
        </PostDate>
      </PostInfo>
    </UserContent>
    <PostText>
      {data.content}
    </PostText>
  </Container>
)

export default PostCard
