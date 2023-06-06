import { StyledSlimButton } from 'components/common/SlimButton/styles';

function SlimButton({ children, ...props }) {
  return <StyledSlimButton {...props}>{children}</StyledSlimButton>;
}

export default SlimButton;
