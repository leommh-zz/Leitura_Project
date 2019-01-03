import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Heading, Strong, Button} from 'evergreen-ui'
import styles from './ComponentStyle'
import { Grid, Row } from 'react-flexbox-grid';

class CommentForm extends Component {

    render() {
        const { setValue, confirm, mode } = this.props
        const { author, body } = this.props.data !== undefined ? this.props.data : undefined
    
        return (
        
            <Grid style={styles.commentPanel}>
                <Row style={styles.panelHeaderMulti}>
                    <div style={styles.row}>
                        { 
                            mode === 'new'
                            ? <img style={styles.icon} src={require('../img/new.png')} alt="new" />
                            : <img style={styles.icon} src={require('../img/edit.png')} alt="edit" />
                        }
                        <Heading style={styles.panelHeaderText}>
                            {
                                mode === "new"
                                ? "New Comment"
                                : "Edit Comment"
                            }
                        </Heading>
                    </div>
                        
                    <Button onClick={() => this.props.goBack()} appearance="minimal" style={styles.button}>
                        <Strong style={styles.buttonText}>X</Strong>
                    </Button>
                    
                </Row>
                <Grid style={styles.columnCenter}>
                    <Grid style={styles.form}>
                        <input
                            style={styles.input}
                            name="author"
                            placeholder="Author"
                            value={author !== undefined ? author : ''}
                            onChange={(text) => setValue('author', text.target.value)}
                        />

                        <textarea
                            style={styles.input}
                            name="body"
                            placeholder="Body"
                            value={body !== undefined ? body : ''} 
                            onChange={(text) => setValue('body', text.target.value)} 
                        />
                    </Grid>

                    <Button onClick={confirm} appearance="minimal" style={styles.button}>
                        <span style={styles.buttonText}>Save</span>
                    </Button>
                </Grid>
            </Grid>
    
        )
    }

}

const mapStateToProps = ({categories}) => {
    return {
        
    }
}

export default connect(mapStateToProps, {  })(CommentForm)