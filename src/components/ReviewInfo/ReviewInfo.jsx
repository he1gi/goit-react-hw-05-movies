import PropTypes from 'prop-types';

export default function ReviewsInfo({ reviews }) {
  return (
    <ul>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <h3>Nickname: {author}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
}
ReviewsInfo.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
