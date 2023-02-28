import ReactDom from "react-dom";

const Backdrop = (props) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-20 bg-black/[.75]" />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-[20vh] left-[5%] w-[90%] bg-white p-4 rounded-[14px] z-30 ">
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(<Backdrop />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
      {}
    </>
  );
};
export default Modal;
