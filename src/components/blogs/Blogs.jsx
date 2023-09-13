import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(()=>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])
  return (
    <div className="flex-1">
      <h1>Blogs: {blogs.length}</h1>
      <Blog></Blog>
    </div>
  );
};

export default Blogs;