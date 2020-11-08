import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import { MdClose } from "react-icons/md";

import {
  ModalBackground,
  ModalContent,
  CloseModalButton,
} from "./CreateFilmElements";
import Button from "./Button";

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  return (
    <>
      {showModal ? (
        <ModalBackground>
          <ModalContent showModal={showModal}>
            <div className="heading">Create Films</div>
            <div>
              <input
                id="email"
                name="email"
                type={"email"}
                placeholder="Email"
                onChange={handleOnChange}
                className="form-input"
              />
            </div>

            <div>
              <input
                name="password"
                type={"password"}
                placeholder="Password"
                className="form-input"
              />
            </div>
            <Button buttonName="Add a Film" onClick={onClick} />
          </ModalContent>

          <CloseModalButton
            aria-label="Close modal"
            onClick={() => setShowModal((prev) => !prev)}
          />
        </ModalBackground>
      ) : null}
    </>
  );
};

export default Modal;
