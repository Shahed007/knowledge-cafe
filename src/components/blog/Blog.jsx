import PropTypes from 'prop-types';
import { useState } from 'react';
import {FaBookmark} from 'react-icons/fa';



const Blog = ({blog, handelBookMark, handelAddTime}) => {
  const [clickButton, setClickButton] = useState(false);
  
const handelChangeBtnCol = () =>{
  setClickButton(!clickButton)
}
  const {id,title,hashtags, img, published_date, reading_time, author_img, author_name} = blog;
  return (
    <div>
      <figure><img className='h-96 w-full rounded-lg' src={img} alt={`cover picture of the title ${title}`} /></figure>
      <div className='flex justify-between pt-8 pb-4'>
        <div className='flex gap-6 '>
          <img className='h-14 w-14 rounded-full object-cover' src={author_img} alt={`author image name ${author_name}`} />
          <div>
            <h3 className='text-2xl font-bold text-gray-800'>{author_name}</h3>
            <p className='text-base font-semibold text-gray-500'>{published_date}</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <span>{reading_time} min read</span>
          <button className={clickButton ? 'text-red-400' : 'text-gray-500'} onClick={() => {handelBookMark(blog); handelChangeBtnCol()}}><FaBookmark></FaBookmark></button>
        </div>
      </div>
      <h4 className='text-4xl font-bold text-gray-800 mb-4'>{title}</h4>
      <div className='flex gap-3 mb-5'>
        {
          hashtags.map((hashtag, indx) => <span key={indx} className='text-xl font-medium text-gray-500'>#{hashtag}</span>)
        }
      </div>
      <button className='underline decoration-1 text-[#6047EC] transition-colors hover:text-gray-500' onClick={()=> handelAddTime(reading_time,id)}>Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handelBookMark: PropTypes.func.isRequired,
  handelAddTime: PropTypes.func.isRequired,
}
export default Blog;