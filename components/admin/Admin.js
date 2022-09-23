import OrderActivity from "./OrderActivity";

import RestoStatus from "./RestoStatus";

const Admin = ({ orderList, restoStatus }) => {
  return (
    <section>
      <div className="custom-container py-6 flex flex-col lg:flex-row gap-6">
        <RestoStatus numOrdered={orderList.length} restoStatus={restoStatus} />
        <OrderActivity orderList={orderList} />
      </div>
    </section>
  );
};

export default Admin;
