import styled from "@emotion/styled/macro";

// TODO: 일단 Modal에서만 사용하는 스타일임, Modal 이외의 style에서도 활용가능하도록 일반화
export const ModalIcon = styled.img`
  width:40px;
  height:40px;
`

export const ModalText = styled.div`
  color: ${({ theme, color }) => color ?? theme.color.white};
`

export const ModalTitle = styled(ModalText)`
  font-size: 40px;
  font-weight: 700;
`

export const ModalHeader = styled(ModalText)`
  font-size: 36px;
  font-weight: 700;
`

export const ModalBody = styled(ModalText)`
  font-size: 16px;
`

export const ModalButton = styled.div`
  padding: 10px;
  width: 100%;
  background-color: #bfcdf0;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  color: #26262d;
  text-align: center;
  font-weight: bold;
  &.active {
    background-color: ${({ theme }) => theme.color.primary500};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.primary200};
  }
  transition: 0.3s;
`
