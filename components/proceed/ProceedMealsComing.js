import WalkIcon from "../icons/WalkIcon";

const ProceedMealsComing = () => {
  return (
    <div className="flex-[1] border-2 border-stone-100 shadow-xl p-6 rounded-xl grid place-items-center">
      <div className="flex flex-col gap-y-4 justify-center text-center items-center text-stone-500 animate-pulse">
        <WalkIcon size="5rem" />
        <h3>Your meals is in coming!</h3>
      </div>
    </div>
  );
};

export default ProceedMealsComing;
