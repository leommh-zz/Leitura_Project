import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row } from 'react-flexbox-grid'
import { getCategoryPosts, votePost, reOrderPosts } from '../actions/posts'
import { getCategories } from '../actions/categories'
import Post from '../components/Post'
import { Heading, Tooltip, Button } from 'evergreen-ui'
import styles from './PageStyle'

class CategoryView extends Component {

    componentDidMount(){
        const { getCategoryPosts, match: { params: { category } } } = this.props
        getCategories()
        getCategoryPosts(category)
    }

    showPosts = (categoryPosts) => {
        return categoryPosts.map(post => (
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

    componentDidUpdate() {
        const categories = this.props.allCategories.categories
        const categoryUrl = this.props.match.params.category
        if (categories) {
            const categoryError = categories.filter(category => category.name !== categoryUrl)
            categoryError.length === categories.length && this.props.history.push("/page/error/404")
        }
    }

    render() {
        const { categoryPosts, reOrderPosts } = this.props

        return (

            
                <Grid style={styles.panel}>
                    <Row style={styles.panelHeader}>
                        <img style={styles.icon} src={require('../img/category.png')} alt="category" />
                        <Heading style={styles.panelHeaderText}>Category</Heading>
                    </Row>

                    <Grid style={styles.contentPanel}>
                        <Row style={styles.columnCenter}>
                            <Tooltip content="Reorder" >
                                <Button onClick={() => reOrderPosts()} appearance="minimal" style={styles.button}>
                                    <img style={styles.icon} src={require('../img/order.png')} alt="order" />
                                </Button>
                            </Tooltip>
                        </Row>
                        <Row style={styles.columnCenter}>
                            {
                                categoryPosts.length > 0 && this.showPosts(categoryPosts)
                            }
                        </Row>

                    </Grid>
                </Grid>
            
        )
    }

}

const mapStateToProps = ({posts, categories}) => {
    return {
        categoryPosts: posts.categoryPosts,
        allCategories: categories.allCategories
    }
}

export default connect(mapStateToProps, { getCategoryPosts, votePost, reOrderPosts, getCategories })(CategoryView)