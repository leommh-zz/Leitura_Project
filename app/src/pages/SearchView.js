import React, { Component } from 'react';
import { Grid, Row } from 'react-flexbox-grid'
import { connect } from 'react-redux'
import { getPosts, votePost, reOrderPosts } from '../actions/posts'
import { Link } from 'react-router-dom'
import { Heading, Tooltip, Button } from 'evergreen-ui'
import styles from './PageStyle'
import Post from '../components/Post'

let action = undefined

class SearchView extends Component {

    state = {
        searchResult: undefined
    }

    componentDidMount() {
        this.getPosts()
    }

    getPosts = () => {
        action = "GET"
        this.props.getPosts()
    }

    showPosts = (searchResult) => {
        if (searchResult !== undefined) {
            if (searchResult.length > 0) {
                return searchResult.map(post => (
                    <Post key={post.id} data={post} setVote={this.setVote} />
                ))
            } else {
                return <h1>Posts not found!</h1>
            }
        }
        
    }

    setVote = (id, esc) => {
        const { votePost } = this.props;
    
        const vote = {
            option: esc
        }
    
        votePost(id, vote);
    }
    
    componentDidUpdate(oldProps) {
        const allPosts = this.props.allPosts
        const { match: { params: { search } } } = this.props

        if (allPosts.length > 0 && action === "GET") {
            action = undefined
            let searchResult = allPosts.filter(post => 
                post.title.includes(search)
            )
            this.setState({searchResult})
        }

        if (oldProps.allPosts !== allPosts) {
            action = undefined
            let searchResult = allPosts.filter(post => 
                post.title.includes(search)
            )
            this.setState({searchResult})
        }

    }

    render() {
        const { searchResult } = this.state
        return (
            <Grid style={styles.panel}>
                <Row style={styles.panelHeader}>
                    <img style={styles.icon} src={require('../img/search.png')} alt="search" />
                    <Heading style={styles.panelHeaderText}>Search</Heading>
                </Row>

                <Grid style={styles.contentPanel}>
                    <Row style={styles.columnCenter}>
                        {
                            searchResult !== undefined && searchResult.length > 0 && (
                                <Row style={styles.rowCenter}>
                                    <Tooltip content="Reorder" >
                                        <Button onClick={() => this.props.reOrderPosts()} appearance="minimal" style={styles.button}>
                                            <img style={styles.icon} src={require('../img/order.png')} alt="order" />
                                        </Button>
                                    </Tooltip>
                                </Row>
                            )
                        }
    
                        <Row style={styles.columnCenter}>
                            {     
                                this.showPosts(searchResult)
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

export default connect(mapStateToProps, { getPosts, votePost, reOrderPosts })(SearchView)