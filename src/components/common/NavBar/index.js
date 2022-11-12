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
import useScrollPosition from "hooks/useScrollPosition";
import useUser from "hooks/useUser";
import { MOCKUP_USER } from "mockups/users";
import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  // 현재 페이지의 스크롤 상태 확인 (맨 위면 배경 투명하게, 그 외엔 배경 색 부여)
  const { scrollY } = useScrollPosition();

  // 유저의 로그인 상태 확인.
  const { loggedOut, user } = useUser();

  return (
    <StyledNavBar transparent={scrollY === 0} {...props}>
      <NavBarContainer>
        <Link to={"/"}>
          <NavBarLogoContainer>
            <Logo variant="large" />
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
              <NavBarMenuText>{user?.username}님 환영합니다!</NavBarMenuText>
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
