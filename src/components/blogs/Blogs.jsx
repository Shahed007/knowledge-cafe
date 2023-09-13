import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({handelBookMark, handelAddTime}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(()=>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])
  return (
    <div className="flex-1 space-y-10">
      {
        blogs.map((blog, index) => <Blog handelAddTime={handelAddTime} key={index} blog={blog} handelBookMark={handelBookMark}></Blog>)
      }
    </div>
  );
};

Blogs.propTypes = {
  handelBookMark: PropTypes.func.isRequired,
  handelAddTime: PropTypes.func.isRequired,
}
export default Blogs;