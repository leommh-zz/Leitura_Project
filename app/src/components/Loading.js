import React from 'react'
import styles from './ComponentStyle'

const Loading  = (state) => {
    return state && (
        <div style={styles.loading}>
            <img style={styles.loadingGif} src={require('../img/loading.gif')} alt="loading" />
        </div>
    )
}

export default Loading