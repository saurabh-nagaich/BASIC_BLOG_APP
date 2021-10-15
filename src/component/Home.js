import React from 'react'
import { Link } from 'react-router-dom'
import BlogList from './BlogList'

function Home() {
    return (
        <div>
            <Link to={"/blogCreate"} className="btn_Link" style={{ textDecoration: 'none' }}><div className="addBlog">Add New Blog</div></Link>
            <BlogList />
        </div>
    )
}

export default Home
