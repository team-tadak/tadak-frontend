import TimerIcon from "assets/svgs/Tumer_light.svg";
import {
  ConfirmButton,
  Modal,
  NormalText,
  SpeedText,
  Icon,
  DimmedArea,
} from "components/ResultModal/style";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import usePreventScroll from "hooks/usePreventScroll";

function ScrollPreventer() {
  usePreventScroll();
  return null;
}

// ex) <Result speed="113" onClick={() => console.log("hey")} />
function ResultModal(props) {
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
            <Modal>
              <Icon src={TimerIcon} />
              <NormalText> {props.titleText ?? "내 타자 기록은"} </NormalText>
              <SpeedText> {props.bigText}</SpeedText>
              <ConfirmButton onClick={props.onClick}>
                <NormalText>확인</NormalText>
              </ConfirmButton>
            </Modal>
          </DimmedArea>
        </>
      )}
    </>
  );

  if (mounted) {
    return createPortal(modal, document.getElementById("portal"));
  } else {
    return null;
  }
}

export default ResultModal;
