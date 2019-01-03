import React, { Component } from 'react'
import { Grid, Row } from 'react-flexbox-grid'
import { connect } from 'react-redux'
import { getCategories } from '../actions/categories'
import { Link } from "react-router-dom"
import { Heading } from 'evergreen-ui'
import styles from './ComponentStyle'

class Menu extends Component {

    componentDidMount() {
        this.props.getCategories()
    }

    showCategories = (categories) => {
        return categories.map((category, index) => (
            <li key={index}>
                <Link key={index} to={`/${category.path}`}>
                    {category.name}
                </Link>
            </li>
        ))
    }

    render() {
        const { allCategories: { categories = [] } } = this.props;
        return (
            <Grid style={styles.menuPanel}>
                {
                    categories.length > 0 && (
                        <Grid style={styles.panel}>
                            <Row style={styles.panelHeader}>
                                <img style={styles.icon} src={require('../img/category.png')} alt="category" />
                                <Heading style={styles.panelHeaderText}>Categories</Heading>
                            </Row>
                            <ul>
                            {
                                this.showCategories(categories)
                            }
                            </ul>
                        </Grid>
                    )
                }

                <Grid style={styles.panel}>
                    <Row style={styles.panelHeader}>
                        <img style={styles.icon} src={require('../img/admin.png')} alt="admin" />
                        <Heading style={styles.panelHeaderText}>Admin</Heading>
                    </Row>
                    <Grid style={styles.contentPanel}>
                        <h3>Leonardo Morini</h3>
                        <ul>
                            <li>
                                <a href="https://github.com/leommh">Github</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/leonardo-morini/">LinkeIn</a>
                            </li>
                        </ul>

                    </Grid>
                    
                </Grid>

                <Grid style={styles.panel}>
                    <Row style={styles.panelHeader}>
                        <img style={styles.icon} src={require('../img/project.png')} alt="project" />
                        <Heading style={styles.panelHeaderText}>Project</Heading>
                    </Row>
                    <Grid style={styles.contentPanel}>
                        <h3>Name: Leitura_Project</h3>
                        <ul>
                            <li>
                                <a href="https://github.com/leommh/Leitura_Project">Github</a>
                            </li>
                        </ul>

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

export default connect(mapStateToProps, { getCategories })(Menu)