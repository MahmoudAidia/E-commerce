import "./Modal.scss";
function Modal({ setOpen, children }) {
  return (
    <div className="modal-box">
      <div className="overlay" onClick={() => setOpen((prev) => !prev)}></div>
      <div className="modal">{children}</div>
    </div>
  );
}

export default Modal;
