import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ADD_BLOG, EDIT_BLOG } from '../redux/blog/blogType'

function EditBlog({match}) {
    const [title,setTitle] = useState("")
    const [categories,setCategories] = useState("")
    const [content,setContent] = useState("")

    
    let id = match.params.id
    const allBlog=useSelector(state => state.blog);
    let index = allBlog.findIndex(el=>el.id===id);
    let obj = allBlog[index];

    useEffect(()=>{
        setTitle(obj.title);
        setCategories(obj.categories);
        setContent(obj.content);
    },[obj])

    const dispatch = useDispatch()

    let handleChange=(event,handler)=> {
        switch(handler){
            case "title": return setTitle(e=>event.target.value);
            case "categories": return setCategories(e=>event.target.value);
            case "content": return setContent(e=>event.target.value);
            default: return;
        }
    }

    let submitBlog=()=>{
        dispatch({
            type:EDIT_BLOG,
            payload:{
                id,
                title:title,
                categories,
                content,
            }
        })
        setTimeout(()=>{
            console.log("rest");
            window.history.go(-1)
        })
    }


    return (
        <div>
            <Link to={"/"} className="btn_Link" style={{ textDecoration: 'none' }}><div className="addBlog">Back to Home</div></Link>
            <div className="form">
                <div className="form_lable">Title</div>
                <input type="text" className="form_field input_title" onChange={e=>handleChange(e,"title")} value={title} id="title" placeholder="React Hook best practics..."/>
                <div className="form_lable">Categories</div>
                <input type="text" className="form_field input_title" id="categories" onChange={e=>handleChange(e,"categories")} value={categories} placeholder="Web dev"/>
                <div className="form_lable">Contect</div>
                <textarea className="form_field input_title" id="content" onChange={e=>handleChange(e,"content")} value={content}/>
                <div className="form_btn">
                    <div className="addBlog btn_for" onClick={submitBlog}>Submit</div>
                    <div className="addBlog btn_for" style={{background:"#ea4335"}}>Cancel</div>
                </div>
                
            </div>
        </div>
    )
}

export default EditBlog
