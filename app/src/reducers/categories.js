import { GET_CATEGORIES } from '../actions/categories'

let STATE_INITIAL = {
    allCategories: []
}

export default function posts (state = STATE_INITIAL, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                allCategories: action.payload
            }
        default:
            return state
    }
}
