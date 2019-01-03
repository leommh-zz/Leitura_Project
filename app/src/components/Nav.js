import React from 'react'
import { Link } from "react-router-dom"
import { Button } from 'evergreen-ui'
import { Grid } from 'react-flexbox-grid';
import styles from './ComponentStyle'

const Nav = () => {
  return (
    <Grid style={styles.menu}>
      
        <Link to="/">
          <Button style={styles.button} appearance="minimal">
            <span style={styles.buttonText}>
              Home
            </span>
          </Button>
        </Link>
    </Grid>
  )
}

export default Nav
