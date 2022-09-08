import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// const Backdrop = (props) => {
//   return (
//     <div
//       className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-40"
//       onClick={props.onClose}
//     />
//   );
// };

const ModalOverlay = (props) => {
  return (
    <div className={`fixed bottom-10 right-10 z-30 `}>
      <div>{props.children}</div>
    </div>
  );
};

const CartMobileModal = (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return (
    <>
      {/* {mounted
        ? createPortal(
            <Backdrop onClose={props.onClose} />,
            document.querySelector("#confirmation")
          )
        : null} */}
      {mounted
        ? createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            document.querySelector("#cart-mobile")
          )
        : null}
    </>
  );
};

export default CartMobileModal;
