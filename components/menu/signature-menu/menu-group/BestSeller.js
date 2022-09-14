import TrophyIcon from "../../../icons/TrophyIcon";

const BestSeller = () => {
  return (
    <div className="flex gap-1 items-center text-xs">
      <span className="text-yellow">
        <TrophyIcon size={"1.5vh"} />
      </span>
      <span>Best seller</span>
    </div>
  );
};

export default BestSeller;
