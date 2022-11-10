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
import useUser from "hooks/useUser";
import { MOCKUP_USER } from "mockups/users";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  // 유저의 로그인 상태 확인.
  const { loggedOut } = useUser();

  return (
    <StyledNavBar>
      <NavBarContainer>
        <Link to={"/"}>
          <NavBarLogoContainer>
            <Logo />
            <NavBarLogoText>TADAK</NavBarLogoText>
          </NavBarLogoContainer>
        </Link>
        <NavBarMenuContainer>
          {loggedOut ? (
            <>
              <NavBarMenuText>
                <Link to={"/login"}>로그인</Link>
              </NavBarMenuText>
              <NavBarMenuText>
                <Link to={"/register"}>회원가입</Link>
              </NavBarMenuText>
            </>
          ) : (
            <>
              <NavBarMenuText>{MOCKUP_USER.username}님 환영합니다!</NavBarMenuText>
              <NavBarMenuText>
                <Link to={"/mypage"}>마이페이지</Link>
              </NavBarMenuText>
              <NavBarLogoutContainer>
                <NavBarLogoutText>
                  <Link to={"/"}>로그아웃</Link>
                </NavBarLogoutText>
                <NavBarLogoutIcon>
                  <LogoutIcon />
                </NavBarLogoutIcon>
              </NavBarLogoutContainer>
            </>
          )}
        </NavBarMenuContainer>
      </NavBarContainer>
    </StyledNavBar>
  );
}

export default NavBar;
