import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import "./Contact.scss";
import Modal from "../Modal";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container className="contact-cont">
      CONTACT
      <div className="contact-page">
        Tweet Me Mail
        <div className="contact-part">
          {/* <button
            type="button"
            className="send out"
            onClick={() => setIsOpen(true)}
          >
            <FontAwesomeIcon icon={faPaperPlane} className="icon" />
            <Modal
              id="modal"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              onClose={() => setIsOpen(false)}
            ></Modal>
          </button> */}
        </div>
      </div>
    </Container>
  );
}
export default Contact;
