import BurgerIcon from "../icons/BurgerIcon";

const ProceedInKitchen = ({ updatedAt }) => {
  const expiredTime = new Date(updatedAt).getTime() + 1800000;
  const expiredDate = new Date(expiredTime);
  const formattedReadyTime = `${("0" + expiredDate.getHours()).slice(-2)}:${(
    "0" + expiredDate.getMinutes()
  ).slice(-2)}`;

  return (
    <div className="flex-[1] border-2 border-stone-100 shadow-xl p-6 rounded-xl grid place-items-center">
      <div className="flex flex-col gap-y-4 justify-center text-center items-center">
        <div className="animate-bounce text-stone-700">
          <BurgerIcon size="5rem" />
        </div>
        <div className="animate-pulse">
          <h3>Your meals is on the kitchen</h3>
          <h3>{`estimated ready time ${formattedReadyTime}`}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProceedInKitchen;
