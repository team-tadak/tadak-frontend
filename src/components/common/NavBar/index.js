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
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <StyledNavBar>
      <NavBarContainer>
        <NavBarLogoContainer>
          <Logo />
          <NavBarLogoText>TADAK</NavBarLogoText>
        </NavBarLogoContainer>
        <NavBarMenuContainer>
          <NavBarMenuText>
            <Link to={"/login"}>로그인</Link>
          </NavBarMenuText>
          <NavBarMenuText>
            <Link to={"/register"}>회원가입</Link>
          </NavBarMenuText>
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
