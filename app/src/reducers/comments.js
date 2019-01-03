import { GET_POST_COMMENTS, GET_COMMENT, ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT, VOTE_COMMENT } from '../actions/comments'

let STATE_INITIAL = {
    allComments: [],
    comments: [],
    commentUnique: []
}

const updateComment = (state, newComment) => {
    let comments = state.comments.map(comment => 
        comment.id === newComment.id
        ? newComment
        : comment
    )
    return comments;
}

const deleteComment = (state, deletedComment) => {
    let comments = state.comments.filter(comment => 
        comment.id !== deletedComment.id
    )
    return comments;
}

export default function posts (state = STATE_INITIAL, action) {
    switch (action.type) {
        case GET_POST_COMMENTS:
            return {
                ...state,
                comments: action.payload
            }
        case GET_COMMENT:
            return {
                ...state,
                commentUnique: action.payload
            }
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }
        case VOTE_COMMENT:
            return {
                ...state,
                comments: updateComment(state, action.payload)
            }
        case UPDATE_COMMENT:
            return {
                ...state,
                comments: updateComment(state, action.payload)
            }
        case DELETE_COMMENT:
            return {
                ...state,
                comments: deleteComment(state, action.payload)
            }
        
        default:
            return state
    }
}
