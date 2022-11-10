import LogoutIcon from "components/common/icons/LogoutIcon";
import Logo from "components/common/Logo";
import {
  NavBarContainer,
  NavBarLogoContainer,
  NavBarLogoText,
  NavBarLogoutContainer,
  NavBarLogoutText,
  NavBarLogoutIcon,
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
          <NavBarLogoutContainer>
            <NavBarLogoutText>로그아웃</NavBarLogoutText>
            <NavBarLogoutIcon>
              <LogoutIcon />
            </NavBarLogoutIcon>
          </NavBarLogoutContainer>
        </NavBarMenuContainer>
      </NavBarContainer>
    </StyledNavBar>
  );
}

export default NavBar;
