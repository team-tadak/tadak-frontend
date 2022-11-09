import Logo from "components/common/Logo";
import {
  NavBarContainer,
  NavBarLogoContainer,
  NavBarLogoText,
  NavBarLogoutText,
  NavBarMenuContainer,
  NavBarMenuText,
  StyledNavBar,
} from "components/common/NavBar/styles";
import React from "react";

function NavBar() {
  return (
    <StyledNavBar>
      <NavBarContainer>
        <NavBarLogoContainer>
          <Logo />
          <NavBarLogoText>TADAK</NavBarLogoText>
        </NavBarLogoContainer>
        <NavBarMenuContainer>
          <NavBarMenuText>로그인</NavBarMenuText>
          <NavBarMenuText>회원가입</NavBarMenuText>
          <NavBarLogoutText>로그아웃</NavBarLogoutText>
        </NavBarMenuContainer>
      </NavBarContainer>
    </StyledNavBar>
  );
}

export default NavBar;
