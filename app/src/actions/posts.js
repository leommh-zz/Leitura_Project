import { showLoading, hideLoading } from 'react-redux-loading'

export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'
export const ADD_POST = 'ADD_POST'
export const VOTE_POST = 'VOTE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const REORDER_POSTS = 'REORDER_POSTS'
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS'

/**
* @description Get posts for category
* @param {string} category
* @returns {array} Posts for category
*/
export function getCategoryPosts(category) {
  return (dispatch, getState) => {
      dispatch(showLoading())
      return fetch(`http://localhost:3001/${category}/posts`, {
          headers: { 'Authorization': 'whatever-you-want'},
          method: 'GET'
      }).then((response) => {
          response.json().then((posts) => dispatch({type: GET_CATEGORY_POSTS, payload: posts}))
      })
      .then(() => dispatch(hideLoading()))
      .catch(err => console.log(err))
  }
}

/**
* @description Get all posts
* @returns {array} All posts
*/
export function getPosts() {
    return (dispatch, getState) => {
      dispatch(showLoading())
      return fetch('http://localhost:3001/posts', {
        headers: { 'Authorization': 'whatever-you-want'},
        method: 'GET'
      }).then((response) => {
        response.json()
        .then(data => {
          function _orderData(a, b){
            return new Date(b.timestamp) - new Date(a.timestamp);
          }
          const posts = data.sort(_orderData)
          dispatch({type: GET_POSTS, payload: posts})
        })
        .catch(err => console.log(err))
      })
      .then(() => dispatch(hideLoading()))
      .catch(err => console.log(err))
    }
}

/**
* @description Get especific post
* @param {number} id
* @returns {object} Especific post
*/
export function getPost(id) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    return fetch(`http://localhost:3001/posts/${id}`, {
      headers: { 'Authorization': 'whatever-you-want'},
      method: 'GET'
    }).then((response) => {
      response.json().then((post) => dispatch({type: GET_POST, payload: post}))
    })
    .then(() => dispatch(hideLoading()))
    .catch(err => console.log(err))
  }
}

/**
* @description Add new post
* @param {object} data (id, timestamp, title, body, author, category)
* @returns {object} New post
*/
export function addPost(data) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    return fetch('http://localhost:3001/posts', {
      headers: { 
        'Authorization': 'whatever-you-want', 
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data),
    }).then((response) => {
      response.json().then((post) => dispatch({type: ADD_POST, payload: post}))
    })
    .then(() => dispatch(hideLoading()))
    .catch(err => console.log(err))
  }
}

/**
* @description Vote in post
* @param {number} id
* @param {object} data (option -> (upVote or downVote))
* @returns {object} Votted post
*/
export function votePost(id, vote) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    return fetch(`http://localhost:3001/posts/${id}`, {
      headers: { 
        'Authorization': 'whatever-you-want', 
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(vote),
    }).then((response) => {
      response.json().then((post) => dispatch({type: VOTE_POST, payload: post}))
    })
    .then(() => dispatch(hideLoading()))
    .catch(err => console.log(err))
  } 
}

/**
* @description Update especific post
* @param {number} id
* @param {object} data (title, body)
* @returns {object} Updated post
*/
export function updatePost (id, data) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    return fetch(`http://localhost:3001/posts/${id}`, {
      headers: { 
        'Authorization': 'whatever-you-want', 
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(data),
    }).then((response) => {
      response.json().then((post) => dispatch({type: UPDATE_POST, payload: post}))
    })
    .then(() => dispatch(hideLoading()))
    .catch(err => console.log(err))
  } 
}

/**
* @description Delete especific post
* @param {number} id
* @returns {object} Deleted post
*/
export function deletePost (id) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    return fetch(`http://localhost:3001/posts/${id}`, {
      headers: { 'Authorization': 'whatever-you-want'},
      method: 'DELETE',
    }).then((response) => {
      response.json().then((post) => dispatch({type: DELETE_POST, payload: post}))
    })
    .then(() => dispatch(hideLoading()))
    .catch(err => console.log(err))
  } 
}

/**
* @description Reorder posts
* @returns {array} Reordered posts
*/
export function reOrderPosts () {
  return {
    type: REORDER_POSTS
  }
}