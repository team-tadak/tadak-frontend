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
  cursor: pointer;
`;

const activeExist = ({ active = true }) => {
  return `max-height: ${active ? "300px" : "0"}; border: ${active ? "1px solid #fff" : "none"};`;
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
  transition: 0.1s ease-in-out;
`;

export const OptionItem = styled.li`
  box-sizing: border-box;
  padding: 15px;
  transition: 0.2s;
  &:hover {
    background-color: #161b21;
  }
`;

function DropdownComponent({ list }) {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState("성별");
  return (
    <DropdownContainer>
      <SelectedLabel value={selected} onClick={() => setActive(!active)}>
        {selected}
      </SelectedLabel>
      <OptionList active={active}>
        {list
          .filter((element) => element !== selected)
          .map((element) => (
            <OptionItem
              key={element}
              onClick={() => {
                setActive(false);
                setSelected(element);
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
