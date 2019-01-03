import { showLoading, hideLoading } from 'react-redux-loading'

export const GET_CATEGORIES = 'GET_CATEGORIES'

/**
* @description Get Categories
* @returns {array} Categories
*/
export function getCategories() {
    return (dispatch, getState) => {
        dispatch(showLoading())
        return fetch(`http://localhost:3001/categories`, {
            headers: { 'Authorization': 'whatever-you-want'},
            method: 'GET'
        }).then((response) => {
            response.json().then((categories) => dispatch({type: GET_CATEGORIES, payload: categories}))
            response.json().then((categories) => console.log(categories))
        })
        .then(() => dispatch(hideLoading()))
        .catch(err => console.log(err))
    }
}

