import { globalStyles, themes } from '../styles'

const styles = {
    ...globalStyles,
    menu: {
        ...themes.borders.small,
        background: themes.colors.grey,
        width: '100%',
        padding: 8,
        marginTop: 8
    },
    input: {
        ...themes.borders.small,
        background: themes.colors.grey,
        marginTop: 5,
        marginBottom: 5,
        minWidth: '90%',
        maxWidth: '90%',
        padding: 5,
        fontSize: 16
    },
    select: {
        ...themes.borders.small,
        background: themes.colors.grey,
        marginTop: 5,
        marginBottom: 5,
        minWidth: '100%',
        maxWidth: '100%',
        padding: 5,
        fontSize: 16
    },
    selectPanel: {
        width: '91.1%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    form: {
        ...globalStyles.columnCenter,
        ...themes.borders.small,
        background: '#f1f1f1',
        marginTop: 15,
        marginBottom: 5,
        padding: 20
    },
    menuPanel: {
        width: '100%',
    },
    postFull: {
        ...themes.borders.small,
        background: '#f1f1f1',
        marginTop: 15,
        marginBottom: 5,
        padding: 20,
        width: '100%'
    },
    commentPanel: {
        ...globalStyles.panel,
        width: '50%',
    },
    panelHeaderMulti: {
        ...globalStyles.panelHeader,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    div: {
        backgroundColor: '#f9f9f9',
        padding: 0
    }
}

export default styles