import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions/comments'
import { idGenerator, timestamp } from '../utils/services'
import CommentForm from './CommentForm'
import { validate } from '../utils/validate'

class NewComment extends Component {

    state = {
        author: '',
        body: '',
    }

    setValue = (name, value) => {
        this.setState({[name]: value})
    }   

    confirm = (e) => {
        e.preventDefault()

        const { author, body } = this.state
        const { parentId } = this.props

        let err = []

        !validate(author) && err.push("Author empty or invalid")
        !validate(body) && err.push("Body empty or invalid")
        !validate(parentId) && err.push("ParentID empty or invalid")

        if (err.length <= 0) {
            const data = {
                id: idGenerator(),
                author: author, 
                body: body,
                timestamp: timestamp(),
                parentId: parentId
            }
    
            this.props.addComment(data)
            this.props.goBack()
        } else {
            let message = err.join('\n\n');
            alert(message);
        }
    }

    render() {
        const { author, body } = this.state
        
        return (
            <div>
                <div>
                    <CommentForm 
                        setValue={this.setValue} 
                        confirm={this.confirm} 
                        data={{author, body}} 
                        mode="new"
                        goBack={this.props.goBack}
                    />
                </div>
            </div>
        )
    }

}

const mapStateToProps = ({comments}) => {
    return {}
}

export default connect(mapStateToProps, { addComment })(NewComment)