import React from 'react'
import { Link } from "react-router-dom"
import { Button, Paragraph, Heading, Strong, Pane, Tooltip } from 'evergreen-ui'
import styles from './ComponentStyle'
import { Grid, Row } from 'react-flexbox-grid';


const Post= (props) => {
    const { data: { id, author, category, title, commentCount, voteScore}, setVote } = props
    return (
      <Grid style={styles.panel}>
      <Row style={styles.panelHeader}>
        <img style={styles.icon} src={require('../img/post.png')} alt="post" />
        <Heading style={styles.panelHeaderText}>{title}</Heading>
      </Row>
      <Row style={styles.columnCenter}>
        <Row style={styles.rowBetween}>
          <Strong style={styles.text}>Autor: {author}</Strong>  
          <Paragraph style={styles.text}>Category: <Link to={`/${category}`}>{category}</Link></Paragraph>
        </Row>
        <Row style={styles.rowBetween}>
          <Paragraph style={styles.text}>Comments: {commentCount}</Paragraph>
          <Paragraph style={styles.text}>Score: {voteScore}</Paragraph>
        </Row>
      </Row>
      
      <Pane display="flex" justifyContent="space-between" alignItems="center">
          <Link to={`/${category}/${id}`}>
              <Button appearance="minimal" style={styles.button}>
                <span style={styles.buttonText}>
                  Ler!  
                </span>  
              </Button>
          </Link>

          <Pane display="flex" justifyContent="end" >
              <Tooltip content="Like"  >
                  <Button onClick={() => setVote(id, 'upVote')} appearance="minimal" style={styles.button}>
                      <img style={styles.icon} src={require('../img/like.png')} alt="like" />
                  </Button>
              </Tooltip>

              <Tooltip content="Dislike" >
                  <Button onClick={() => setVote(id, 'downVote')} appearance="minimal" style={styles.button}>
                          <img style={styles.icon} src={require('../img/dislike.png')} alt="dislike" />
                  </Button>
              </Tooltip>
          </Pane> 
      </Pane>

    </Grid>
    )

}

export default Post;
