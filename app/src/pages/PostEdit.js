import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatePost, getPost } from '../actions/posts'
import PostForm from '../components/PostForm'
import { Grid } from 'react-flexbox-grid'
import styles from './PageStyle'
import { validate } from '../utils/validate'

class PostEdit extends Component {

    state = {
        id: undefined,
        title: '',
        body: '',
        author: '',
        category: '',
    }

    componentDidMount() {
        const { match: { params: { id } }, getPost } = this.props
        getPost(id)
    }

    componentDidUpdate() {
        const { state: { id }, props: { post } } = this

        post && post.error && this.props.history.push("/page/error/404");

        if (Object.keys(post).length > 0 && id === undefined){
            const { id, title, author, body , category } = post
            this.setState({id, title, author, body, category})
        }
    }

    setValue = (name, value) => {
        this.setState({[name]: value})
    }   

    confirm = (e) => {
        e.preventDefault()

        const { id, title, author, body, category } = this.state

        let err = []

        !validate(id) && err.push("ID empty or invalid")
        !validate(title) && err.push("Title empty or invalid")
        !validate(author) && err.push("Author empty or invalid")
        !validate(body) && err.push("Body empty or invalid")
        !validate(category) && err.push("Category empty or invalid")

        if (err.length <= 0) {
            const data = {
                id: id,
                title: title,
                author: author, 
                body: body,
                category: category,
            }
            
            this.props.updatePost(id, data)
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
                    mode="edit"
                    setValue={this.setValue} 
                    confirm={this.confirm} 
                    data={{title, author, body, category}} 
                    goBack={this.props.history.goBack}
                />
                
            </Grid>
        )
    }

}


const mapStateToProps = ({posts}) => {
    return {
        post: posts.post
    }
}

export default connect(mapStateToProps, { updatePost, getPost })(PostEdit)