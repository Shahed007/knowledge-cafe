import PropTypes from "prop-types";

const Mark = ({bookMark}) => {
  const {title} = bookMark;
  return (
    <div className="bg-white rounded-lg p-5 mb-4">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
    </div>
  );
};
Mark.propTypes ={
  bookMark: PropTypes.object.isRequired,
}
export default Mark;