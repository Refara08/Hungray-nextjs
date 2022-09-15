import { useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import TestimonialCard from "./TestimonialCard";
import testimonial_data from "../../store/testimonial-data";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1536 },
    partialVisibilityGutter: 60,
    items: 3,
  },
  desktopLg: {
    breakpoint: { max: 1536, min: 1280 },
    partialVisibilityGutter: 0,
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    partialVisibilityGutter: 260,
    items: 1,
  },
  tabletLg: {
    breakpoint: { max: 1024, min: 780 },
    partialVisibilityGutter: 350,
    items: 1,
  },
  tablet: {
    breakpoint: { max: 780, min: 640 },
    partialVisibilityGutter: 190,
    items: 1,
  },
  mobileXl: {
    breakpoint: { max: 640, min: 570 },
    partialVisibilityGutter: 150,
    items: 1,
  },
  mobileLg: {
    breakpoint: { max: 570, min: 470 },
    partialVisibilityGutter: 90,
    items: 1,
  },
  mobile: {
    breakpoint: { max: 470, min: 0 },
    partialVisibilityGutter: 0,
    items: 1,
  },
};

const Testimonial = () => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  return (
    <section id="testimonials" className="bg-white py-12 lg:py-24">
      <div className="custom-container flex flex-col lg:grid lg:grid-cols-6 gap-6 items-center">
        <div className="lg:col-span-2 flex flex-col gap-4 items-start">
          <h2 className="font-bold text-4xl w-[80%]">
            What they said about us
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur quod fugit debitis reprehenderit culpa alias in
            voluptate voluptatem labore ab!
          </p>
        </div>
        <div
          onMouseDown={() => setIsGrabbing(true)}
          onMouseUp={() => setIsGrabbing(false)}
          className={`lg:col-span-4 w-full ${
            isGrabbing ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          <Carousel
            partialVisible={true}
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all 0.3s"
            transitionDuration={500}
            containerClass="pb-12"
            arrows={false}
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            // dotListClass="custom-dot-list-style"
            itemClass="transition-all duration-300"
          >
            {testimonial_data.map((item, index) => (
              <TestimonialCard key={index} item={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
