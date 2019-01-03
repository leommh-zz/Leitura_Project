import { globalStyles, themes } from '../styles'

const styles = {
    ...globalStyles,
    main: {
        flex: 1, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column'
    },
    contentPanel: {
        ...globalStyles.columnCenter,
        ...themes.borders.small,
        background: '#f1f1f1',
        marginTop: 15,
        marginBottom: 5,
        padding: 20
    },
    error: {
        ...globalStyles.panel,
        backgroundColor: themes.colors.green
    }
}

export default styles