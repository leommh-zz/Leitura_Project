import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/posts'
import { idGenerator, timestamp } from '../utils/services'
import PostForm from '../components/PostForm'
import { Grid } from 'react-flexbox-grid'
import styles from './PageStyle'
import { validate } from '../utils/validate'

class NewPostView extends Component {

    state = {
        title: '',
        body: '',
        author: '',
        category: '',
    }

    setValue = (name, value) => {
        this.setState({[name]: value})
    }   

    confirm = (e) => {
        e.preventDefault()

        const { title, author, body, category } = this.state

        let err = []

        !validate(title) && err.push("Title empty or invalid")
        !validate(author) && err.push("Author empty or invalid")
        !validate(body) && err.push("Body empty or invalid")
        !validate(category) && err.push("Category empty or invalid")
        
        if (err.length <= 0) {
            const data = {
                id: idGenerator(),
                title: title,
                author: author, 
                body: body,
                category: category,
                timestamp: timestamp(),
            }

            this.props.addPost(data)
            this.props.history.goBack()
        } else {
            let message = err.join('\n\n');
            alert(message);
        }
    }

    render() {

        const { title, author, body, category } = this.state
        
        return (
            <Grid style={styles.columnCenter}>
                
                <PostForm 
                    mode="new"
                    setValue={this.setValue} 
                    confirm={this.confirm} 
                    data={{title, author, body, category}} 
                    goBack = {this.props.history.goBack}
                />
                
            </Grid>
        )
    }

}


const mapStateToProps = ({posts}) => {
    return {}
}

export default connect(mapStateToProps, { addPost })(NewPostView)