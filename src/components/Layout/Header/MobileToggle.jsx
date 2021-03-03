import React, { useState, useContext } from 'react';
import { Collapse } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { iconToggle, Logo, iconX } from '../../../constants/headerItem';
import MenuContext from '../../../context/MenuContext';
import LoginContext from '../../../context/LoginContext';

import {
  MobileSidebarWrapper,
  MobileToggleContainer,
  ToggleImageContainer,
  MobileSidebar,
  MobileHeaderContainer,
  MobileLogoContainer,
  MobileCloseContainer,
  MobileHR,
  MobileUserContainer,
  MobileUserContent,
  MobileLogoutButton,
  MobileStyledPanelHeader,
  MobileStyledPanelContent,
  StyledLink,
} from './styled/mobile';

const NonUserContent = '비회원님,';
const IntroContent = '쫌.싸에 오신 걸 환영합니다.';
const LogoutContent = '로그아웃';
const LoginContent = '로그인';

const MobileToggle = (props) => {
  const { displayHandler } = props;
  const {
    categories,
    menu,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
  } = useContext(MenuContext);
  const {
    isLogged,
    setIsLogged,
    profileNickName,
    setProfileNickName,
    setProfileId,
  } = useContext(LoginContext);

  const [open, setOpen] = useState(false);

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);
  const genExtra = () => <DownOutlined />;

  return (
    <>
      <MobileToggleContainer>
        <ToggleImageContainer
          src={iconToggle}
          onClick={() => {
            openMenu();
          }}
        />
      </MobileToggleContainer>
      {open && (
        <MobileSidebarWrapper>
          <MobileSidebar>
            <MobileHeaderContainer>
              <MobileLogoContainer src={Logo} />
              <MobileCloseContainer
                src={iconX}
                onClick={() => {
                  closeMenu();
                }}
              />
            </MobileHeaderContainer>
            <MobileHR />
            <MobileUserContainer>
              {isLogged === true ? (
                <>
                  <MobileUserContent>{profileNickName}님,</MobileUserContent>
                  <MobileUserContent>{IntroContent}</MobileUserContent>
                  <MobileLogoutButton
                    onClick={() => {
                      setIsLogged(false);
                      setProfileNickName();
                      setProfileId();
                    }}
                  >
                    {LogoutContent}
                  </MobileLogoutButton>
                </>
              ) : (
                <>
                  <MobileUserContent>{NonUserContent}</MobileUserContent>
                  <MobileUserContent>{IntroContent}</MobileUserContent>
                  <MobileLogoutButton onClick={displayHandler}>
                    {LoginContent}
                  </MobileLogoutButton>
                </>
              )}
            </MobileUserContainer>
            <MobileHR />
            <Collapse
              accordion
              expandIconPosition="right"
              onChange={(eventId) =>
                setSelectedCategory(Number.parseInt(eventId, 10))}
            >
              {Object.entries(categories).map((categoryArr) => {
                const category = categoryArr[1];
                const categotyName = category.name;
                const categotyId = category.id;
                return (
                  <MobileStyledPanelHeader
                    header={categotyName.toUpperCase()}
                    key={categotyId}
                    showArrow={false}
                    selected={selectedCategory === categotyId}
                    extra={genExtra()}
                  >
                    {menu[categotyName] &&
                      menu[categotyName].map((brand) => (
                        <MobileStyledPanelContent
                          key={brand.id}
                          onClick={() => {
                            closeMenu();
                            setSelectedBrand(brand.id);
                          }}
                        >
                          <StyledLink
                            to={`/${brand.name.toUpperCase()}`}
                            selected={selectedBrand === brand.id}
                          >
                            {brand.name.toUpperCase()}
                          </StyledLink>
                        </MobileStyledPanelContent>
                      ))}
                  </MobileStyledPanelHeader>
                );
              })}
            </Collapse>
          </MobileSidebar>
        </MobileSidebarWrapper>
      )}
    </>
  );
};

export default MobileToggle;
