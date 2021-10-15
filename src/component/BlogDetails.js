import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { DELETE_BLOG, LIKE_BLOG, UNLIKE_BLOG } from '../redux/blog/blogType';

function BlogDetails({match}) {
    let [likeD,setLike]=useState(false)
    const dispatch = useDispatch()
    let id = match.params.id
    
    
    const allBlog=useSelector(state => state.blog);
    
    let index = allBlog.findIndex(el=>el.id===id);
    let obj = allBlog[index];
    
    let deleteBlog = id =>{
        dispatch({
            type:DELETE_BLOG,
            payload:{
                id,
            }
        })
        setTimeout(()=>{
            window.history.go(-1)
        })
    }

    let like = (id) =>{
        dispatch({
            type:LIKE_BLOG,
            payload:{id},
        })
        setLike(true);
    };
    
    let unLike = (id) =>{
        dispatch({
            type:UNLIKE_BLOG,
            payload:{id},
        })
        setLike(false);
    };

    return (
        <div>
            <div className="blog_nav">
                <Link to={"/"} className="btn_Link" style={{ textDecoration: 'none' }}><div className="addBlog">Back to Home</div></Link>
                <div>
                    <Link to={`/editBlog/${id}`} className="btn_Link" style={{ textDecoration: 'none' }}><div className="addBlog" style={{background:"#98E776"}}>Edit Blog</div></Link>
                    <div className="addBlog" onClick={()=>deleteBlog(id)} style={{background:"#EA4335"}}>Delete Blogs</div>
                </div>
            </div>
            <div className="blog">
                <h1>{obj.title}</h1>
                <p className="categories">{obj.categories}</p>
                <div>
                    <p>{obj.content}</p>
                </div>
            </div>
            <div className="like">
                <div  onClick={e=>like(id)}>
                    <img style={{display:`${likeD?"none":""}`}} src="https://img.icons8.com/material-outlined/24/ffffff/filled-like.png"/>
                </div>
                <div onClick={e=>unLike(id)}>
                    <img style={{display:`${likeD?"":"none"}`}} src="https://img.icons8.com/color/48/000000/two-hearts.png"/>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails
