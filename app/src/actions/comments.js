import { showLoading, hideLoading } from 'react-redux-loading'

export const GET_POST_COMMENTS = 'GET_POST_COMMENTS'
export const GET_COMMENT = 'GET_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'



/**
* @description Get comments for post
* @param {number} id
* @returns {array} comments for post
*/
export function getPostComments(id) {
    return (dispatch, getState) => {
    dispatch(showLoading())

    return fetch(`http://localhost:3001/posts/${id}/comments`, {
        headers: { 'Authorization': 'whatever-you-want'},
        method: 'GET',
    }).then((response) => {
        response.json().then((comments) => dispatch({type: GET_POST_COMMENTS, payload: comments}))
    })
        .then(() => dispatch(hideLoading()))
        .catch(err => console.log(err))
    }
}

/**
* @description Get especific comment
* @param {number} id
* @returns {object} Especific comment
*/
export function getComment(id) {
    return (dispatch, getState) => {
        dispatch(showLoading())
    
        return fetch(`http://localhost:3001/comments/${id}`, {
            headers: { 'Authorization': 'whatever-you-want'},
            method: 'GET',
        }).then((response) => {
            response.json().then((comment) => dispatch({type: GET_COMMENT, payload: comment}))
        })
            .then(() => dispatch(hideLoading()))
            .catch(err => console.log(err))
    }    
}

/**
* @description Add new comment
* @param {object} data (id, timestamp, body, author, parentId)
* @returns {object} New comment
*/
export function addComment(data) {
    return (dispatch, getState) => {
    dispatch(showLoading())

    return fetch(`http://localhost:3001/comments`, {
        headers: { 
            'Authorization': 'whatever-you-want', 
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data),
    }).then((response) => {
        response.json().then((comment) => dispatch({type: ADD_COMMENT, payload: comment}))
    })
        .then(() => dispatch(hideLoading()))
        .catch(err => console.log(err))
    }
}

/**
* @description Update especific comment
* @param {number} id
* @param {object} data (timestamp, body)
* @returns {object} Updated comment
*/
export function updateComment(id, data) {
    return (dispatch, getState) => {
    dispatch(showLoading())

    return fetch(`http://localhost:3001/comments/${id}`, {
        headers: { 
            'Authorization': 'whatever-you-want', 
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(data),
    }).then((response) => {
        response.json().then((comment) => dispatch({type: UPDATE_COMMENT, payload: comment}))
    })
        .then(() => dispatch(hideLoading()))
        .catch(err => console.log(err))
    }
}

/**
* @description Delete especific comment
* @param {number} id
* @returns {object} Deleted comment
*/
export function deleteComment(id) {
    return (dispatch, getState) => {
    dispatch(showLoading())

    return fetch(`http://localhost:3001/comments/${id}`, {
        headers: { 'Authorization': 'whatever-you-want'},
        method: 'DELETE',
    }).then((response) => {
        response.json().then((comment) => dispatch({type: DELETE_COMMENT, payload: comment}))
    })
        .then(() => dispatch(hideLoading()))
        .catch(err => console.log(err))
    }
}

/**
* @description Vote in comment
* @param {number} id
* @param {object} data (option -> (upVote or downVote))
* @returns {object} Votted comment
*/
export function voteComment(id, data) {
    return (dispatch, getState) => {
    dispatch(showLoading())

    return fetch(`http://localhost:3001/comments/${id}`, {
        headers: { 
            'Authorization': 'whatever-you-want', 
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data),
    }).then((response) => {
        response.json().then((comment) => dispatch({type: VOTE_COMMENT, payload: comment}))
    })
        .then(() => dispatch(hideLoading()))
        .catch(err => console.log(err))
    }
}




