import Image from "next/image";

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
        <form className="reservation-form shadow-xl py-4 px-6 rounded-2xl border-2 border-slate-100">
          {/* name - email */}
          <div className="input-group">
            <div className="control-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="control-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" name="email" id="email" required />
            </div>
          </div>
          {/* phone - table for */}
          <div className="input-group">
            <div className="control-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" name="phone" id="phone" required />
            </div>
            <div className="control-group">
              <label htmlFor="guess">Table For</label>
              <input type="text" name="guess" id="guess" required />
            </div>
          </div>
          {/* ocassion */}
          <div className="control-group">
            <label htmlFor="ocassion">Ocassion</label>
            <input type="text" name="ocassion" id="ocassion" required />
          </div>
          {/* date - time */}
          <div className="input-group">
            <div className="control-group">
              <label htmlFor="date">Select Date</label>
              <input type="date" name="date" id="date" required />
            </div>
            <div className="control-group">
              <label htmlFor="time">Select Time</label>
              <input type="time" name="time" id="time" required />
            </div>
          </div>
          {/* button */}
          <div className="w-full flex justify-end mt-4">
            <button className="button bg-yellow">Book Now</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
