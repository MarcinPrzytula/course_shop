import StarRatings from 'react-star-ratings';

const RatingBoard = ({ actuallyCourse, handleModal }) => {
  let x = 0;
  let score = 0;

  actuallyCourse.rating.forEach(item => {
    x += item.rating;
  });

  score = (x / actuallyCourse.rating.length).toFixed(1);

  if (isNaN(score)) {
    score = 0;
  }

  return (
    <>
      <button className="product__rating-stars" onClick={handleModal}>
        <StarRatings
          rating={Number(score)}
          starRatedColor="blue"
          starEmptyColor="white"
          numberOfStars={5}
          name="rating"
          starDimension="30px"
          starSpacing="5px"
        />
        {score}/5 ({actuallyCourse.rating.length})
      </button>
    </>
  );
};

export default RatingBoard;
