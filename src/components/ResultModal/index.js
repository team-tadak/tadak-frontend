import TimerIcon from "assets/svgs/Tumer_light.svg"
import {
    ConfirmButton,
    Modal,
    NormalText,
    SpeedText,
    Icon
} from "components/ResultModal/style"


// ex) <Result speed="113" onClick={() => console.log("hey")} />
function ResultModal(props) {
    return (
        <Modal>
            <Icon src={TimerIcon} />
            <NormalText> 내 타자 기록은 </NormalText>
            <SpeedText> {props.speed} 타</SpeedText>
            <ConfirmButton onClick={props.onClick}>
                <NormalText>확인</NormalText>
            </ConfirmButton>
        </Modal>
    )
}


export default ResultModal;