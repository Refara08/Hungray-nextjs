import CallUs from "./CallUs";
import TwitterIcon from "../icons/TwitterIcon";
import InstagramIcon from "../icons/InstagramIcon";
import FaceBookIcon from "../icons/FacebookIcon";

const ContactContent = () => {
  return (
    <div className="custom-container flex flex-col gap-6 w-[300px]">
      <div>
        <h2 className="font-bold text-4xl w-[80%] lg:w-full">Contact Us</h2>
        <p className="text-sm">
          If you would like to talk about your upcoming event, please feel free
          to contact us anytime
        </p>
      </div>
      <div>
        <h3 className="font-semibold">Jl. Sesuatu No.99, Komplek Sesuatu</h3>
        <h5>Kec. Sesuatu, Kota Sesuatu, Indonesia</h5>
      </div>
      <div className="flex flex-col gap-4">
        {["+62666666666", "+6255555555"].map((num, index) => (
          <CallUs key={index} phoneNumber={num} />
        ))}
      </div>
      <div>
        <h3 className="uppercase font-semibold mb-4 text-xl tracking-wide">
          Socials
        </h3>
        <div className="flex gap-4">
          <TwitterIcon
            size="1.5rem"
            className="hover:text-yellow transition duration-300 cursor-pointer"
          />
          <InstagramIcon
            size="1.5rem"
            className="hover:text-yellow transition duration-300 cursor-pointer"
          />
          <FaceBookIcon
            size="1.5rem"
            className="hover:text-yellow transition duration-300 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
