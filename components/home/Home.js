import Image from "next/image";
import WavesDown from "./waves-down";

const Home = () => {
  return (
    <>
      <section className="pt-8 bg-light-yellow">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 custom-container">
          {/* Main Photo of hero section */}
          <div className="w-full xl:w-[70vh] aspect-square sm:aspect-video lg:aspect-square lg:rounded-tl-[25%] overflow-hidden lg:order-2 lg:place-self-end">
            <Image
              src="/images/home/header.jpg"
              alt="meet and eat together at Hungray Eatery"
              width="300px"
              height="450px"
              layout="responsive"
              priority={true}
            />
          </div>
          {/* Main content of hero section */}
          <div className="tracking-tighter py-6 lg:order-1 xl:px-[10vh] 2xl:px-[0vh]">
            <h1 className="text-4xl lg:text-5xl xl:text-[8vh] xl:leading-[8vh] font-bold mb-4">
              Meet eat and enjoy the true taste
            </h1>
            <p>
              we serve the best and the most fresh food exist in the town. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Sequi, facere.
            </p>
            <div className="flex flex-wrap justify-start items-center gap-x-4 gap-y-2 mt-4 -ml-1">
              <button className="button bg-yellow ">Book a reservation</button>
              <button className="button bg-black  text-white">
                Order online
              </button>
            </div>
          </div>
        </div>
      </section>
      <WavesDown />
    </>
  );
};

export default Home;
