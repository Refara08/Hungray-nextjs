import ProceedActions from "./ProceedActions";
import ProceedStatus from "./ProceedStatus";

const Proceed = ({ order, expiredDate, onUpdateLoadedOrder }) => {
  return (
    <section id="proceed" className="pb-8 pt-36">
      <div className="custom-container">
        <ProceedStatus order={order} />
        <ProceedActions
          order={order}
          expiredDate={expiredDate}
          onUpdateLoadedOrder={onUpdateLoadedOrder}
        />
      </div>
    </section>
  );
};

export default Proceed;
