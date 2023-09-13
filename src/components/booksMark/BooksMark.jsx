import PropTypes from 'prop-types';
import BookMark from "../bookMark/Mark"

const BooksMark = ({bookmarks, readingTime}) => {
  return (
    <div className="md:basis-1/3">
      <h2 className='text-2xl rounded-lg mb-4 mt-10 md:mt-0 font-bold text-center text-indigo-600 bg-indigo-100 border-2 border-indigo-600 py-5'>Spent time on read : {readingTime} min</h2>
      <div className='p-7 bg-base-200 rounded-lg'>
      <h2 className='text-xl font-bold text-gray-800 mb-5'>Bookmarked Blogs : {bookmarks.length}</h2>
        {
          bookmarks.map(bookMark => <BookMark key={bookMark.id} bookMark={bookMark}></BookMark>)
        }
      </div>
    </div>
  );
};

BooksMark.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
}
export default BooksMark;