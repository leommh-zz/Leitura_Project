import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPost, votePost, deletePost } from '../actions/posts'
import { getPostComments, voteComment, deleteComment } from '../actions/comments'
import PostFull from '../components/PostFull'
import Comment from '../components/Comment'
import NewComment from '../components/NewComment';
import styles from './PageStyle'
import { Button, Heading, Strong, Tooltip, Pane } from 'evergreen-ui'
import { Grid, Row } from 'react-flexbox-grid';

class PostView extends Component {

    state = {
        newComment: false,
        edit: false,
    }

    componentDidMount() {
        this.getPostAndComments()
    }

    getPostAndComments = async () => {
        const { getPost, getPostComments, match: { params: { id } } } = this.props
        getPost(id);
        getPostComments(id);
    }

    componentDidUpdate() {
        const post = this.props.post;
        post && post.error && this.props.history.push("/page/error/404");
    }

    showComments = (comments) => {
        return comments.map(comment => (
            <Comment 
                key={comment.id} 
                id={comment.id} 
                title={comment.title} 
                author={comment.author} 
                body={comment.body} 
                voteScore={comment.voteScore} 
                setVote={this.setCommentVote}
                deleteComment={this.deleteComment} 
            />
        ))
    }

    setCommentVote = (id, esc) => {
        const { voteComment } = this.props;
        
        const vote = {
            option: esc
        }

        voteComment(id, vote);
    }

    setVote = (esc) => {
        const { votePost, match: { params: { id } } } = this.props;
        const vote = {
            option: esc
        }

        votePost(id, vote);
    }

    deletePost = (id) => {
        const { deletePost } = this.props
        deletePost(id)
        this.props.history.goBack()
    }

    deleteComment = (id) => {
        const { deleteComment } = this.props
        deleteComment(id)
    }

    render() {
        const { newComment } = this.state
        const { post, comments } = this.props
        return (
            <Grid style={styles.main}>
                <Grid style={styles.panel}>
                    <Row style={styles.panelHeader}>
                        <img style={styles.icon} src={require('../img/post.png')} alt="post" />
                        <Heading style={styles.panelHeaderText}>
                            { Object.keys(post).length > 0 && post.title }
                        </Heading>
                    </Row>
                        {
                        Object.keys(post).length > 0 && (
                            <Grid>
                                <PostFull key={post.id} data={post} />

                                <Pane display="flex" justifyContent="space-between">
                                    <Pane display="flex" justifyContent="start">
                                        <Tooltip content="Edit">
                                            <Link to={`/${post.category}/${post.id}/edit/`}>
                                                <Button appearance="minimal" style={styles.button}>
                                                    <img style={styles.icon} src={require('../img/edit.png')} alt="edit" />
                                                </Button>
                                            </Link>
                                        </Tooltip>

                                        <Tooltip content="Delete">
                                            <Button appearance="minimal" style={styles.button} onClick={() => this.deletePost(post.id)}>
                                                <img style={styles.icon} src={require('../img/delete.png')} alt="delete" />
                                            </Button>
                                        </Tooltip>
                                    </Pane>

                                    <Pane display="flex" justifyContent="end" >
                                        <Tooltip content="Like"  >
                                            <Button onClick={() => this.setVote('upVote')} appearance="minimal" style={styles.button}>
                                                <img style={styles.icon} src={require('../img/like.png')} alt="like" />
                                            </Button>
                                        </Tooltip>

                                        <Tooltip content="Dislike" >
                                            <Button onClick={() => this.setVote('downVote')} appearance="minimal" style={styles.button}>
                                                    <img style={styles.icon} src={require('../img/dislike.png')} alt="png" />
                                            </Button>
                                        </Tooltip>
                                    </Pane> 
                                </Pane>

                                <Pane display="flex" justifyContent="center">
                                    <Strong size={500} marginTop={50}>
                                        Comments
                                    </Strong>
                                </Pane>

                                <Grid>
                                    {
                                        Object.keys(comments).length > 0 && (
                                            this.showComments(comments)
                                        )
                                    }

                                    <Button onClick={() => this.setState({newComment: true})} appearance="minimal" style={styles.button}>
                                        <span style={styles.buttonText}>Add Comment</span>
                                    </Button>

                                    {
                                        newComment && (
                                            <NewComment parentId={post.id} goBack={() => this.setState({newComment: false})} />
                                        )
                                    }
                                </Grid>

                            </Grid>
                        )
                    }

                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = ({posts, comments}) => {
    return {
        post: posts.post,
        comments: comments.comments
    }
}

export default connect(mapStateToProps, { getPost, votePost, getPostComments, voteComment, deletePost, deleteComment })(PostView);