import { PlayContollerButton, StyledPlayController } from 'pages/typepage/PlayController/styles';

function PlayController({ isPlaying, onPause, onResume, onStop, ...props }) {
  // const [isPlaying, setIsPlaying] = useState(false);

  // 재생, 일시정지 관리하는 함수
  function handleStatusToggle() {
    if (isPlaying) {
      // 현재 진행 중이면

      onPause();
    } else {
      // 현재 멈춘 상태면

      onResume();
    }
  }

  return (
    <StyledPlayController {...props}>
      <PlayContollerButton onClick={handleStatusToggle}>
        {isPlaying ? '일시정지' : '재개'}
      </PlayContollerButton>
      <PlayContollerButton buttontype="warning" onClick={onStop}>
        종료
      </PlayContollerButton>
    </StyledPlayController>
  );
}

export default PlayController;
