
import './App.css'
import Blogs from './components/blogs/Blogs'
import BooksMark from './components/booksMark/BooksMark'
import Header from './components/header/Header'

function App() {


  return (
    <>
     <Header></Header>
     <div className='md:flex container mx-auto px-3'>
     <Blogs></Blogs>
     <BooksMark></BooksMark>
     </div>
    </>
  )
}

export default App
