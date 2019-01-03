import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/categories'
import { Heading, Strong, Button } from 'evergreen-ui'
import styles from './ComponentStyle'
import { Grid, Row } from 'react-flexbox-grid';

class PostForm extends Component {

    componentDidMount() {
        this.props.getCategories()
    }

    showCategories = (allCategories) => {
        return (
            allCategories.map((category, index) => 
            <option 
                key={index} 
                value={category.path}
            >
                {category.name}
            </option>)
        )
    }
    render() {
        const { allCategories: { categories }, setValue, confirm, mode }  = this.props
        const data = this.props.data !== undefined ? this.props.data : undefined
        const { title = undefined, author = undefined, body = undefined, category = undefined } = data !== undefined && data

        return (
        
            <Grid style={styles.panel}>
                <Row style={styles.panelHeaderMulti}>
                    <div style={styles.row}>
                        { 
                            mode === 'new'
                            ? <img style={styles.icon} src={require('../img/new.png')} alt="new" />
                            : <img style={styles.icon} src={require('../img/edit.png')} alt="edit" />
                        }
                        

                        <Heading style={styles.panelHeaderText}>
                            {
                                mode === 'new' 
                                ? 'New Post' 
                                : 'Edit Post'
                            }
                        </Heading>
                    </div>

                    <button onClick={() => this.props.goBack()} style={styles.button}>
                        <Strong style={styles.buttonText}>X</Strong>
                    </button>

                </Row>
                <Grid style={styles.columnCenter}>
                    <Grid style={styles.form}>
                        <input
                            style={styles.input}
                            name="title"
                            placeholder="Title"
                            value={title !== undefined ? title : ''} 
                            onChange={(text) => setValue('title', text.target.value)} 
                        />

                        <Row style={styles.selectPanel}>
                            <select 
                                style={styles.select}
                                value={category !== undefined ? category : undefined}
                                onChange={(text) => setValue('category', text.target.value)}
                            >
                                <option value={undefined}>Categorias</option>
                                {
                                    categories && this.showCategories(categories)
                                }
                            </select>
                        </Row>

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

                        <Button onClick={confirm} appearance="minimal" style={styles.button}>
                            <span style={styles.buttonText}>Enviar</span>
                        </Button>
                    </Grid>
                    
                </Grid>
            </Grid>
    
    
        )
    }
    

}

const mapStateToProps = ({categories}) => {
    return {
        allCategories : categories.allCategories,
    }
}


export default connect(mapStateToProps, { getCategories })(PostForm)