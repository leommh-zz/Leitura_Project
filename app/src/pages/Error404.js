import React from 'react'
import styles from './PageStyle'
import { Grid, Row } from 'react-flexbox-grid'

const Error404 = () => {
    return (
        <Grid style={styles.panel}>
            <Grid style={styles.error}>
                <Row style={styles.columnCenter}>
                    <Grid style={styles.panel}>
                    
                        <Row style={styles.columnCenter}>
                            <h1>Error 404</h1>
                            <h2>Page not found!</h2>
                        </Row>
                    </Grid>
                    <img width={250} src={require('../img/error404.png')} alt="error404" />
                </Row>
            </Grid>
        </Grid>
    )
}

export default Error404;