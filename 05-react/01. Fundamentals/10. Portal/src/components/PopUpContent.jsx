import { createPortal } from "react-dom";

const PopUpComponent = ({ copied }) => {
  return createPortal(
    <section>
      {copied && (
        <div style={{ position: "absolute", bottom: "3rem" }}>
          Cpoied To clip-Board
        </div>
      )}
    </section>,
    document.querySelector("#popup-content")
  );
};

export default PopUpComponent;
