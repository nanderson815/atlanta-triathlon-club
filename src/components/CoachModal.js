import React, { useState } from "react";
import { convertMarkdownToHTML } from "../utilities";
import { HTMLContent } from "./Content";

const Modal = ({ children, closeModal, modalState, name }) => {
  if (!modalState) {
    return null;
  }

  return (
    <div className="modal is-active" style={{ overflox: "visible" }}>
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card" style={{ maxHeight: 600 }}>
        <header className="modal-card-head">
          <p className="modal-card-title mb-0">{name}</p>
          <button className="delete" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">{children}</div>
        </section>
        <footer className="modal-card-foot">
          <a className="button" onClick={closeModal}>
            Close
          </a>
        </footer>
      </div>
    </div>
  );
};

export default function CoachModal({ content, name }) {
  const [modalState, setModalState] = useState(false);

  const toggleModal = () => {
    setModalState(!modalState);
    const html = document.querySelector("html");
    if (html.classList.contains("is-clipped")) {
      document.querySelector("html").classList.remove("is-clipped");
    } else {
      document.querySelector("html").classList.add("is-clipped");
    }
  };

  return (
    <div>
      <a className="button is-primary" onClick={toggleModal}>
        Learn More
      </a>

      <Modal
        closeModal={toggleModal}
        modalState={modalState}
        title="Example modal title"
        name={name}
      >
        <div>
          <HTMLContent
            className="content"
            content={convertMarkdownToHTML(content)}
          />
        </div>
      </Modal>
    </div>
  );
}
