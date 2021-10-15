import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link,Redirect } from 'react-router-dom'
import { ADD_BLOG } from '../redux/blog/blogType'

function CreateBlog() {
    const [title,setTitle] = useState("")
    const [categories,setCategories] = useState("")
    const [content,setContent] = useState("")

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
            type:ADD_BLOG,
            payload:{
                title:title,
                categories,
                content,
                like:0
            }
        })
        setTitle(e=>"");
        setCategories(e=>"");
        setContent(e=>"");
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

export default CreateBlog
