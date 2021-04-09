import React, { useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size';

import MenuContext from '../../../context/MenuContext';
import LoginContext from '../../../context/LoginContext';

import { LoginModal, LoggedModal } from '../../LoginStatus';
import Search from '../../Search';

import {
  Logo,
  DesktopHeaderTools,
  MobileHeaderTools,
} from '../../../constants/headerItem';
import { DESK_MIN_WIDTH } from '../../../constants/responsiveItem';

import MobileToggle from './MobileToggle';
import DarkModeToggle from './DarkModeToggle';

const HeaderWrapper = styled.div(tw`block fixed w-full z-50`);
const HeaderContainer = styled.div(
  tw`flex items-center text-white h-50px md:(justify-between) justify-end`,
  css`
    background-color: #303030;
    @media (min-width: 768px) {
      padding: 0 12.5%;
    }
    @media (max-width: 767px) {
      padding: 0 5%;
    }
  `,
);

const ImageContainer = styled.img(tw`items-center clickable w-5 h-5`);
const LogoContainer = styled.img(
  tw`items-center clickable w-8 h-8 md:(relative left-auto) absolute left-2/4 transform -translate-x-2/4`,
);

const ToolImageContainer = styled(ImageContainer)(tw`md:(px-5) px-2 z-10`);
const ToolBar = styled.div(tw`flex items-center justify-end`);

const SearchBoxContainer = styled.div(
  tw`md:(flex justify-end w-48 h-7 mx-5 clickable border-solid border-2 rounded-2xl pt-0) pt-1 items-center`,
  css`
    border-color: #646464;
  `,
);

const StyledLink = styled(Link)(tw`flex items-center`);

const MobileToolbarContainer = styled.div(
  tw`md:(hidden) flex items-center justify-end`,
);
const DeskTopToolbarContainer = styled.div(
  tw`md:(flex items-center justify-end) hidden`,
);

const Header = () => {
  const [display, setDisplay] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { setSelectedCategory, setSelectedSubCategory } = useContext(
    MenuContext,
  );
  const { isLogged } = useContext(LoginContext);
  const windowWitdh = useWindowWidth();

  const hadleDisplay = () => {
    setDisplay(!display);
  };
  const handleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <>
      <HeaderWrapper>
        <MobileToggle displayHandler={hadleDisplay} />
        <HeaderContainer>
          <StyledLink to="/">
            <LogoContainer
              src={Logo}
              onClick={() => {
                setSelectedCategory(0);
                setSelectedSubCategory(0);
              }}
            />
          </StyledLink>
          <ToolBar>
            <DeskTopToolbarContainer>
              <SearchBoxContainer key="Search" onClick={handleSearch}>
                <ToolImageContainer src={DesktopHeaderTools.Search} />
              </SearchBoxContainer>
              <ToolImageContainer
                key="MyPage"
                src={DesktopHeaderTools.MyPage}
                onClick={hadleDisplay}
              />
            </DeskTopToolbarContainer>

            <MobileToolbarContainer>
              <ToolImageContainer
                key="Search"
                src={MobileHeaderTools.Search}
                onClick={handleSearch}
              />
              <StyledLink to="/mobile/favorite">
                <ToolImageContainer key="Heart" src={MobileHeaderTools.Heart} />
              </StyledLink>
            </MobileToolbarContainer>
            {windowWitdh >= DESK_MIN_WIDTH && <DarkModeToggle />}
          </ToolBar>
        </HeaderContainer>
      </HeaderWrapper>
      {display &&
        (isLogged === true ? (
          <LoggedModal displayHandler={hadleDisplay} />
        ) : (
          <LoginModal displayHandler={hadleDisplay} />
        ))}
      {isSearchOpen && <Search handleSearch={handleSearch} />}
    </>
  );
};

export default Header;
