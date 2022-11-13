import styled from "@emotion/styled";
import { useState } from "react";

export const DropdownContainer = styled.div`
  position: relative;
  width: 133px;
  height: 56px;
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
`;

export const SelectedLabel = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid #fff;
  background-color: transparent;
  box-sizing: border-box;
  border-radius: 10px;
  width: inherit;
  height: inherit;
  justify-content: left;
  padding: 15px;
  color: #fff;
  font-size: 16px;
  background: url("/images/expand_down.png") calc(100% - 15px) center no-repeat;
  margin: 9px 0;
  cursor: pointer;
`;

const activeExist = ({ active = true }) => {
  return `display: ${active ? "block" : "none"}`;
};

export const OptionList = styled.ul`
  box-sizing: border-box;
  position: absolute;
  top: 66px;
  list-style-type: none;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #fff;
  background-color: transparent;
  overflow: hidden;
  box-sizing: border-box;
  ${activeExist};
  transition: 0.5s;
`;

export const OptionItem = styled.li`
  box-sizing: border-box;
  padding: 15px;
  transition: 0.5s;
  &:hover {
    background-color: #161b21;
  }
  ${({ selectedCheck }) => {
    return selectedCheck
      ? `background: url("/images/check_ring.png") calc(100% - 15px) center no-repeat;`
      : null;
  }}

  ${({ selectedCheck }) => {
    return selectedCheck ? `background-color: #161b21; ` : null;
  }}
`;

// 사용 예시
//
// <DropdownComponent list={["남성", "여성", "선택 안 함"]}></DropdownComponent>

function DropdownComponent({ list, onSelect = (selected) => { } }) {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState("성별");
  return (
    <DropdownContainer>
      <SelectedLabel value={selected} onClick={() => setActive(!active)}>
        {selected}
      </SelectedLabel>
      <OptionList active={active}>
        {list.map((element) => (
          <OptionItem
            key={element}
            selectedCheck={element === selected ? true : false}
            onClick={() => {
              setActive(false);
              setSelected(element);
              onSelect(element);
            }}
          >
            {element}
          </OptionItem>
        ))}
      </OptionList>
    </DropdownContainer>
  );
}

export default DropdownComponent;
