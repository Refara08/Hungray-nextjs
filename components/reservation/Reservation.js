import Image from "next/image";

import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    <section
      id="reservation"
      className="custom-container py-32 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center"
    >
      <div className="hidden lg:block w-full aspect-square mx-auto overflow-hidden">
        <Image
          src="/images/reservation/restaurant.jpg"
          alt="Image of Hungray Restaurant"
          width="300px"
          height="400px"
          layout="responsive"
          className="-translate-y-16"
        />
      </div>
      <div className="bg-white">
        <h2 className="font-bold text-4xl w-[80%] mb-4">Reserve a Table</h2>
        <ReservationForm />
      </div>
    </section>
  );
};

export default Reservation;
