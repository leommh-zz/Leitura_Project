import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css'
import Nav from './components/Nav'
import Routes from './Routes'
import Menu from './components/Menu'
import styles from './AppStyle';

const App = () => {
    return (
      <Grid fluid>
        <Row>
            <Nav />
        </Row>
        <Row>
          <Col xs={9} style={styles.content}>
            <Routes />
          </Col>
          <Col xs={3}>
            <Menu />
          </Col>
        </Row>
      </Grid>
    )
}

export default App
