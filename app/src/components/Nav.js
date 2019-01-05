import React from 'react'
import { Link } from "react-router-dom"
import { Button } from 'evergreen-ui'
import { Grid, Row } from 'react-flexbox-grid'
import Search from './Search'
import styles from './ComponentStyle'

const Nav = () => {
  return (
    <Grid style={styles.menu}>
        <Row style={styles.rowNav}>
          <Link to="/">
            <Button style={styles.button} appearance="minimal">
              <span style={styles.buttonText}>
                Home
              </span>
            </Button>
          </Link>
          <Search />
        </Row>
        
    </Grid>
  )
}

export default Nav
