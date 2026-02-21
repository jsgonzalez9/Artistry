import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled(motion.div)`
  background: var(--nav-bottom);
  border-radius: 12px;
  padding: 40px;
  width: 90%;
  max-width: 540px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: var(--nav-name);
  padding: 4px;
  line-height: 1;

  &:hover {
    color: var(--foot-back);
  }
`;

const ModalHeader = styled.h2`
  font-family: clashDisplay, sans-serif;
  font-size: 28px;
  color: var(--nav-name);
  margin: 0 0 8px 0;
  text-align: center;
`;

const ModalBody = styled.div`
  margin-top: 16px;
`;

const ModalFooter = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const Button = styled.button`
  font-family: satoshi, sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 32px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  &.primary {
    background: var(--butt);
    color: var(--nav-bottom);
    
    &:hover {
      background: var(--foot-back);
    }
  }

  &.secondary {
    background: transparent;
    color: var(--nav-name);
    border: 1px solid var(--nav-name);
    
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }
`;

const DialogModal = ({ title, isOpened, onClose, onProceed, children }) => {
  const modalRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpened]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpened) {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpened]);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onClose();
      setIsAnimating(false);
    }, 300);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleProceed = async () => {
    await onProceed();
    handleClose();
  };

  if (!isOpened && !isAnimating) return null;

  return (
    <AnimatePresence>
      {isOpened && (
        <Backdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleOverlayClick}
          role="presentation"
        >
          <ModalContainer
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            role="dialog"
            aria-modal="true"
          >
            <CloseButton
              onClick={handleClose}
              type="button"
              aria-label="Close modal"
            >
              ×
            </CloseButton>

            <ModalHeader>{title}</ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              <Button className="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button className="primary" onClick={handleProceed}>
                Save
              </Button>
            </ModalFooter>
          </ModalContainer>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default DialogModal;
