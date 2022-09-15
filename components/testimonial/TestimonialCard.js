import Stars from "./Stars";
import TimeIcon from "../icons/TimeIcon";

const TestimonialCard = ({ item }) => {
  const date = new Date(item.createdAt);
  const formatedHours = ("0" + date.getHours()).slice(-2);
  const formatedMinutes = ("0" + date.getMinutes()).slice(-2);
  const formatedDate = `${date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })} ${formatedHours}:${formatedMinutes}`;

  return (
    <div className="flex flex-col justify-between gap-4 shadow-xl h-full p-4 bg-stone-50 border-2 border-stone-100 w-[350px] rounded-xl">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="h-full aspect-square bg-stone-300 rounded-full" />
          <div>
            <h3 className="font-bold text-2xl">{item.name}</h3>
            <Stars num={item.stars} />
          </div>
        </div>
        <p>{item.testimonial}</p>
      </div>
      <div className="flex gap-2 text-stone-400">
        <TimeIcon size="1rem" />
        <h6 className="text-xs">{formatedDate}</h6>
      </div>
    </div>
  );
};

export default TestimonialCard;
