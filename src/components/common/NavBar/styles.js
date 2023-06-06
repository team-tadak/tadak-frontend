import styled from '@emotion/styled';
import { NAVBAR_HEIGHT } from 'constants/navbar';

export const StyledNavBar = styled.header`
  position: fixed;

  padding: 8px 16px;
  width: 100%;
  height: ${NAVBAR_HEIGHT}px;
  background-color: ${({ theme, transparent }) =>
    transparent ? 'rgba(255, 255, 255, 0)' : theme.color.navbarBG};

  transition: background-color 0.3s;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavBarContainer = styled.nav`
  width: 100%;
  margin: auto auto;
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  align-items: center;
`;

export const NavBarLogoContainer = styled.div`
  display: flex;
  column-gap: 4px;
  align-items: center;
`;

export const NavBarLogoText = styled.h1`
  font-weight: 700;
  font-size: 20px;
`;

export const NavBarMenuContainer = styled.ul`
  display: flex;
  column-gap: 40px;
  align-items: center;
`;

export const NavBarMenuText = styled.li`
  font-weight: 700;
  font-size: 16px;
`;

export const NavBarLogoutContainer = styled.li`
  display: flex;
  align-items: center;
`;
export const NavBarLogoutText = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.theme.color.warning300};
  margin-right: 6px;
`;

export const NavBarLogoutIcon = styled.div`
  width: 24px;
  height: 24px;
`;
