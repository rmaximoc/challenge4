import React from 'react';
import PostCard from '../PostCard/PostCard'
import CommentCard from '../CommentCard/CommentCard'
import { Container } from './CardWrapper.style'

const CardWrapper = ({ data }) => {
  return (
    <Container>
      <PostCard data={data} />
      <hr style={{ width: '95%', border: '0.5px solid #EEEEEE' }} />
      {data.comments.map(card => <CommentCard data={card} />)}
    </Container>
  )
}


export default CardWrapper;
