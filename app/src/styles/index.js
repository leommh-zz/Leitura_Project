export const themes = {
    borders: {
        small: {
            border: '2px solid',
            borderTopColor: '#fff',
            borderLeftColor: '#fff',
            borderRightColor: '#333',
            borderBottomColor: '#333',
        },
        large: {
            border: '3px solid',
            borderTopColor: '#fff',
            borderLeftColor: '#fff',
            borderRightColor: '#333',
            borderBottomColor: '#333',

        },
    },
    colors: {
        grey: '#c0c0c0',
        blue: '#010080',
        darkGrey: '#333333'
    }
}

export const globalStyles = {
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    rowCenter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowBetween: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    columnCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    panel: {
        ...themes.borders.large,
        backgroundColor: themes.colors.grey,
        width: '90%',
        marginTop: 10,
        marginBottom: 10,
        paddingTop: 1.8,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
    },
    panelHeader: {
        flex: 0,
        backgroundColor: themes.colors.blue,
        padding: 5,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    panelHeaderText: {
        color: '#FFFFFF',
        paddingLeft: 5
    },
    text: {
        color: '#333',
        fontSize: 16,
        margin: 5
    },
    button: {
        ...themes.borders.large,
        backgroundColor: themes.colors.grey,
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        paddingBottom: 0,
        paddingTop: 0
    },
    buttonText: {
        color: '#333',
        fontSize: 16
    },
    icon: {
        width: 25
    },
    loading: {
        backgroundColor: '#FFFFFF'
    },
    loadingGif: {
        width: '30%'
    }
}