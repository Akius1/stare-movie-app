import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";

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

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal],
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <ModalBackground ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper>
              <ModalContent showModal={showModal}>
                <div className="heading">Create Films</div>
                <div>
                  <input
                    id="email"
                    name="email"
                    type={"email"}
                    placeholder="Email"
                    // onChange={handleOnChange}
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
                <Button buttonName="Add a Film" />
              </ModalContent>

              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </ModalBackground>
      ) : null}
    </>
  );
};

export default Modal;
