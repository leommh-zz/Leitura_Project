import React, { Component } from 'react'
import { Grid, Row } from 'react-flexbox-grid'
import { connect } from 'react-redux'
import { getPosts, votePost, reOrderPosts } from '../actions/posts'
import { Link } from 'react-router-dom'
import { Heading, Tooltip, Button } from 'evergreen-ui'
import styles from './PageStyle'
import Post from '../components/Post'

class Home extends Component {

  componentDidMount() {
    this.props.getPosts()
  }

  showPosts = (allPosts) => {
    return allPosts.map(post => (
      <Post key={post.id} data={post} setVote={this.setVote} />
    ))
  }

  setVote = (id, esc) => {
    const { votePost } = this.props;

    const vote = {
        option: esc
    }

    votePost(id, vote);
  }

  render() {
    const {props: { allPosts, reOrderPosts }} = this

    return (

        <Grid style={styles.panel}>
          <Row style={styles.panelHeader}>
            <img style={styles.icon} src={require('../img/home.png')} alt="home" />
            <Heading style={styles.panelHeaderText}>Home</Heading>
          </Row>

          <Grid style={styles.contentPanel}>
            <Row style={styles.columnCenter}>
              <Row style={styles.rowBetween}>
                <Link to={`/post/new`} >
                  <Button appearance="minimal" style={styles.button}>
                    <span style={styles.buttonText}>
                      New Post
                    </span> 
                  </Button>
                </Link>
                <Tooltip content="Reorder" >
                  <Button onClick={() => reOrderPosts()} appearance="minimal" style={styles.button}>
                          <img style={styles.icon} src={require('../img/order.png')} alt="order" />
                  </Button>
                </Tooltip>
              </Row>

              <Row style={styles.columnCenter}>
                {     
                  allPosts.length > 0 && this.showPosts(allPosts)    
                }
              </Row>

            </Row>
          </Grid>
        </Grid>
    
    )
  }
}

const mapStateToProps = ({posts}) => {
  return {
    allPosts: posts.allPosts  	
  }
}

export default connect(mapStateToProps, { getPosts, votePost, reOrderPosts })(Home)
