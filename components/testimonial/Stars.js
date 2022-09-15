import FillStar from "../icons/FillStarIcon";
import EmptyStarIcon from "../icons/EmptyStarIcon";

const Stars = ({ num }) => {
  const filledStars = [];
  const emptyStars = [];
  for (let i = 0; i < num; i++) {
    filledStars.push(<FillStar key={i} size="1rem" />);
  }

  for (let i = 0; i < 5 - num; i++) {
    emptyStars.push(<EmptyStarIcon key={i} size="1rem" />);
  }

  return (
    <div className="flex gap-1 text-yellow">
      <>{filledStars}</>
      <>{emptyStars}</>
    </div>
  );
};

export default Stars;
