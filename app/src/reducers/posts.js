import { GET_CATEGORY_POSTS, GET_POSTS, GET_POST, ADD_POST, VOTE_POST, UPDATE_POST, DELETE_POST, REORDER_POSTS} from '../actions/posts'

let STATE_INITIAL = {
    categoryPosts: [],
    allPosts: [],
    post: [],

}

const updatePost = (statePosts, newPost) => {
    let posts = statePosts.map(post => 
        post.id === newPost.id
        ? newPost
        : post
    )
    return posts;
}

const deletePost = (statePosts, deletedPost) => {
    let posts = statePosts.filter(post => 
        post.id !== deletedPost.id
    )
    return posts;
}

export default function posts (state = STATE_INITIAL, action) {
    switch (action.type) {
        case GET_CATEGORY_POSTS:
        return {
            ...state,
            categoryPosts: action.payload
        }
        case GET_POSTS:
            return {
                ...state,
                allPosts: action.payload
            }
        case GET_POST:
            return {
                ...state,
                post: action.payload
            }
        case ADD_POST:
            return {
                ...state,
                post: action.payload
            }
        case VOTE_POST:
            return {
                ...state,
                post: action.payload,
                allPosts: updatePost(state.allPosts, action.payload),
                categoryPosts: updatePost(state.categoryPosts, action.payload)
            }
        case UPDATE_POST:
            return {
                ...state,
                post: action.payload,
                allPosts: updatePost(state.allPosts, action.payload),
                categoryPosts: updatePost(state.categoryPosts, action.payload)
            }
        case DELETE_POST:
            return {
                ...state,
                post: [],
				allPosts: deletePost(state.allPosts, action.payload),
				categoryPosts: deletePost(state.categoryPosts, action.payload)
            }
        case REORDER_POSTS: 
            return {
                ...state,
                allPosts: [...state.allPosts.reverse()],
                categoryPosts: [...state.categoryPosts.reverse()]
            }
        default:
            return state
    }
}
