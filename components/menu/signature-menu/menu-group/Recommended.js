import ThumbsUpIcon from "../../../icons/ThumbIcon";

const Recommended = () => {
  return (
    <div className="flex items-center gap-1 text-xs">
      <span className="text-green-700">
        <ThumbsUpIcon size={"1.3vh"} />
      </span>
      <span>Recommended</span>
    </div>
  );
};

export default Recommended;
