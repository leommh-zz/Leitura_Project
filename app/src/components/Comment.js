import React, { Component } from 'react'
import EditComment from './EditComment'
import { Paragraph, Text, Pane, Tooltip, Button } from 'evergreen-ui'
import styles from './ComponentStyle'
import { Grid } from 'react-flexbox-grid';

class Comment extends Component {
    state = {
        edit : false
    }

    render() {
        
        const { id, author, body, voteScore, setVote, deleteComment } = this.props
        const { edit } = this.state

        return edit === false ? (
            <Grid style={styles.commentPanel}>
                <Grid style={styles.form}>
                    
                        <Text style={styles.buttonText}>Author: { author }</Text>
                        <Text>Vote Score: { voteScore }</Text>
                    
                    
                    <Paragraph>{ body }</Paragraph>
                </Grid>
                
                <Pane display="flex" justifyContent="space-between">
                    <Pane display="flex" justifyContent="start">
                        <Tooltip content="Edit">
                            <Button appearance="minimal" style={styles.button} onClick={() => this.setState({edit: true})}>
                                <img style={styles.icon} src={require('../img/edit.png')} alt="edit" />
                            </Button>
                        </Tooltip>
                        <Tooltip content="Delete">
                            <Button appearance="minimal" style={styles.button} onClick={() => deleteComment(id)}>
                                <img style={styles.icon} src={require('../img/delete.png')} alt="delete" />
                            </Button>
                        </Tooltip>
                    </Pane>

                    <Pane display="flex" justifyContent="end">
                        <Tooltip content="Like"  >
                            <Button appearance="minimal" style={styles.button}  onClick={() => setVote(id, 'upVote')}>
                                <img style={styles.icon} src={require('../img/like.png')} alt="like" />
                            </Button>
                        </Tooltip>

                        <Tooltip content="Dislike"  >
                            <Button appearance="minimal" style={styles.button}  onClick={() => setVote(id, 'downVote')}>
                                <img style={styles.icon} src={require('../img/dislike.png')} alt="dislike" />    
                            </Button>
                        </Tooltip>
                    </Pane> 
                </Pane>

            </Grid>
        ) : (
            <EditComment 
                id={id} 
                author={author} 
                body={body} 
                goBack={() => this.setState({edit: false})} 
            />
        )
    }
    

}

export default Comment