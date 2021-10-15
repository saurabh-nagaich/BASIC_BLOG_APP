import { ADD_BLOG, EDIT_BLOG, DELETE_BLOG, LIKE_BLOG } from "./blogType"


export const addBlog =(data)=>{
    return {
        type:ADD_BLOG,
        payload:data
    }
}