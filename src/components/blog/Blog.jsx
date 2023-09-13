import PropTypes from 'prop-types';

const Blog = ({blog}) => {
  return (
    <div>
      <h4>Hello</h4>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
}
export default Blog;