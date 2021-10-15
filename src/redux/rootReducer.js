import { combineReducers } from "redux"
import blogReducer from "./blog/blogReducer"
const rootReducer = combineReducers({
    blog:blogReducer,
})

export default rootReducer