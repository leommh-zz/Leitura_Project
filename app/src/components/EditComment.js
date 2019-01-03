import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateComment } from '../actions/comments'
import {  timestamp } from '../utils/services'
import CommentForm from './CommentForm'
import { validate } from '../utils/validate'

class NewComment extends Component {

    state = {
        author: '',
        body: '',
    }

    componentDidMount() {
        const { author, body } = this.props
        this.state.author.length <= 0 && this.state.body.length <= 0 && (
            this.setState({author, body})
        )
    }

    setValue = (name, value) => {
        this.setState({[name]: value})
    }   

    confirm = (e) => {
        e.preventDefault()

        const { body } = this.state
        const { id } = this.props

        let err = []

        !validate(body) && err.push("Body empty or invalid")
        !validate(id) && err.push("ID empty or invalid")

        if (err.length <= 0) {
            const data = {
                body: body,
                timestamp: timestamp(),
            }
    
            this.props.updateComment(id, data)
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
                        mode="edit"
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

export default connect(mapStateToProps, { updateComment })(NewComment)