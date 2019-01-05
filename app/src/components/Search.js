import React, { Component } from 'react';
import { Link } from "react-router-dom"
import styles from './ComponentStyle'
import { Button } from 'evergreen-ui'
import { Grid, Row } from 'react-flexbox-grid';

class Search extends Component {

    state = {
        search: ''
    }

    goSearch = (search) => {
        this.props.history.push(`/search/${search}`)
    }

    render() {
        const { search } = this.state

        return (
                <Row style={styles.rowCenter}>
                    <input
                        style={styles.inputSearch}
                        name="title"
                        placeholder="Search"
                        value={search} 
                        onChange={(text) => this.setState({search: text.target.value})} 
                    />
                    
                    <Link to={`/search/posts/${search}`}>
                        <Button style={styles.button} appearance="minimal">
                            <span style={styles.buttonText}>
                                Buscar
                            </span>
                        </Button>
                    </Link>
                </Row>
        )
    }
}

export default Search