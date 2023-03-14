import React from "react";
import Modal from "../components/Modal";
import "../components/Modal.css";

export const FigureModal = ({
  galery,
  foto,
  isOpenModal,
  closeModal,
  btnPhotoNext,
  btnPhotoPrev,
}) => {
  return (
    <>
      <Modal
        isOpen={isOpenModal}
        closeModal={closeModal}
        btnPhotoNext={btnPhotoNext}
        btnPhotoPrev={btnPhotoPrev}
      >
        <div className="modal-head">
          <img src={foto} alt="foto" />
        </div>
      </Modal>
    </>
  );
};
