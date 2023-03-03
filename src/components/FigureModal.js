import React from "react";
import Modal from "../components/Modal";
import "../components/Modal.css";

export const FigureModal = ({ foto, isOpenModal, closeModal }) => {
  return (
    <>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <div className="modal-head">
          <img src={foto} alt="foto" />
        </div>
      </Modal>
    </>
  );
};
