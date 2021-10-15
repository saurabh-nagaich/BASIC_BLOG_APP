import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function BlogList() {
    const allBlog=useSelector(state => state.blog);
    console.log(allBlog)
    return (
        <div className="blog_list">
            <h2 className="list_title">BLOG LIST</h2>
            {
                allBlog?allBlog.map((el)=>(
                    <Link to={`/blogDetail/${el.id}`} id="link" key={el.id} >
                        <div className="table_row">
                            <h4>{el.title}</h4>
                            <p>{el.categories}</p>
                        </div>
                    </Link>
                )):null
            }
        </div>
    )
}

export default BlogList
