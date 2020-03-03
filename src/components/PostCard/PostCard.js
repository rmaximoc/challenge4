import React from 'react'
import {
  Container,
  PostText,
  UserName,
  UserContent,
  PostDate,
  PostInfo
} from './PostCard.style'
import avatar from '../../assets/images/avatar.png'

const PostCard = ({ data }) => (
  <Container>
    <UserContent>
      <img src={avatar} alt="avatar"/>
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
