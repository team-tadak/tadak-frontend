import {
  StyledModal,
  DimmedArea,
} from "./styles";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import usePreventScroll from "hooks/usePreventScroll";
import { staggerOne } from "styles/motions";
import { motion } from "framer-motion";
import { rapidFadeInVariants } from "styles/motions/motions";


function ScrollPreventer() {
  usePreventScroll();
  return null;
}

function PortalModal(props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modal = (
    <>
      {props.open && (
        <>
          <ScrollPreventer />
          <DimmedArea
            onClick={({ target, currentTarget }) => {
              if (target === currentTarget) {
                props.onClose();
              }
            }}
          >
            <motion.div
              variants={staggerOne}
              initial="initial"
              whileInView="animate"
              exit="exit"
            >
              <StyledModal variants={rapidFadeInVariants} css={props.css}>
                {props.children}
              </StyledModal>
            </motion.div>
          </DimmedArea>
        </>
      )
      }
    </>
  );

  if (mounted) {
    return createPortal(modal, document.getElementById("portal"));
  } else {
    return null;
  }
}

export default PortalModal;
