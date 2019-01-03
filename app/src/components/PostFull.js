import React from 'react'
import { Link } from "react-router-dom"
import { Paragraph, Strong} from 'evergreen-ui'
import styles from './ComponentStyle'
import { Grid, } from 'react-flexbox-grid';

const Post = (props) => {
  const { author, body, category, voteScore } = props.data
  return (

    <Grid style={styles.postFull}>
      <Strong size={500} marginTop={5}>Autor: {author}</Strong>  
      <Paragraph size={500} marginTop={5}>Votes Score: {voteScore} </Paragraph>
      <Paragraph size={500} marginTop={5}>Category: <Link to={`/${category}`}>{category}</Link></Paragraph>
      <Paragraph size={500} marginTop={5}>{body}</Paragraph>
    </Grid>
  )
}

export default Post;
