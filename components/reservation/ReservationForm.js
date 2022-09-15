const ReservationForm = () => {
  return (
    <form className="reservation-form shadow-xl py-4 px-6 rounded-2xl border-2 border-slate-100">
      {/* name - email */}
      <div className="input-group">
        <div className="control-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="e.g. John Doe"
          />
        </div>
        <div className="control-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="e.g. john.doe@email.com"
          />
        </div>
      </div>
      {/* phone - table for */}
      <div className="input-group">
        <div className="control-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            required
            placeholder="e.g. +555555"
          />
        </div>
        <div className="control-group">
          <label htmlFor="guess">Table For</label>
          <input type="number" name="guess" id="guess" required />
        </div>
      </div>
      {/* ocassion */}
      <div className="control-group">
        <label htmlFor="ocassion">Ocassion</label>
        <input
          type="text"
          name="ocassion"
          id="ocassion"
          required
          placeholder="e.g. Dinner, Birthday, Corporate, Wedding ..."
        />
      </div>
      {/* date - time */}
      <div className="input-group">
        <div className="control-group">
          <label htmlFor="date">Select Date</label>
          <input type="date" name="date" id="date" required />
        </div>
        <div className="control-group">
          <label htmlFor="time">Select Time</label>
          <input
            type="time"
            name="time"
            id="time"
            min="10:00:00"
            max="22:00:00"
            required
          />
        </div>
      </div>
      <div className="control-group">
        <label htmlFor="message">Any special request?</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="3"
          placeholder="e.g. I need 2 baby seats"
        />
      </div>
      {/* button */}
      <div className="w-full flex justify-end mt-4">
        <button className="button bg-yellow">Book Now</button>
      </div>
    </form>
  );
};

export default ReservationForm;
