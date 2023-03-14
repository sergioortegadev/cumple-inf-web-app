import "./Modal.css";

const Modal = ({
  children,
  isOpen,
  closeModal,
  btnPhotoNext,
  btnPhotoPrev,
}) => {
  const handleModalClick = (e) => e.stopPropagation();
  return (
    <article onClick={closeModal} className={`modal ${isOpen && `is-open`}`}>
      <div onClick={handleModalClick} className="modal-container">
        <button onClick={closeModal} className="modal-close">
          X
        </button>
        <button onClick={btnPhotoPrev} className="prev-photo">
          <i className="bi bi-chevron-compact-left"></i>
        </button>
        <button onClick={btnPhotoNext} className="next-photo">
          <i className="bi bi-chevron-compact-right"></i>
        </button>

        {children}
      </div>
    </article>
  );
};

export default Modal;
