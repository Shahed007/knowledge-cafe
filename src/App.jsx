
import {useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import BooksMark from './components/booksMark/BooksMark'
import Header from './components/header/Header'
import Swal from 'sweetalert2'


function App() {
const [bookmarks, setBookMarks] = useState([]);
const [readingTime, setReadingTime] = useState(0);

const handelBookMark = (bookMark) => {
  const isExist = bookmarks.find(mark => mark.id === bookMark.id);
  if(isExist){
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'This item is all ready exist',
    })
  }else{
    console.log(bookMark);
    setBookMarks([...bookmarks, bookMark]);
  }
  
}

const handelAddTime = (time,id) => {
  setReadingTime(readingTime + time);
  const remaining = bookmarks.filter(item => item.id !== id);
  setBookMarks(remaining)

}

  return (
    <>
     <Header></Header>
     <div className='md:flex container mx-auto px-3 mt-8 gap-6'>
     <Blogs handelAddTime={handelAddTime} handelBookMark={handelBookMark}></Blogs>
     <BooksMark readingTime={readingTime} bookmarks={bookmarks}></BooksMark>
     </div>
    </>
  )
}

export default App
