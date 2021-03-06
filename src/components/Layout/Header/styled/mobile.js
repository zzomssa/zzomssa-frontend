import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'react-router-dom';
import { Button, Collapse } from 'antd';

const { Panel } = Collapse;

const MobileToggleContainer = styled.div(
  tw`md:(hidden) transform -translate-y-1/2 top-1/2 left-px absolute z-20`,
  css`
    padding-left: 5%;
  `,
);
const ToggleImageContainer = styled.img(tw`items-center clickable w-5 h-5`);

const ImageContainer = styled.img(tw`clickable w-7 h-7`);

const MobileSidebarWrapper = styled.div(
  tw`md:(hidden) fixed h-full w-full z-20`,
  css`
    background-color: rgba(0, 0, 0, 0.8);
  `,
);

const MobileSidebar = styled.div(
  tw`md:(hidden) h-full w-3/5 z-20 overflow-scroll`,
  css`
    background-color: ${(props) => props.theme.background};
  `,
);

const MobileHeaderContainer = styled.div(
  tw`flex items-center px-6 h-58px text-white justify-between md:(hidden)`,
  css`
    background-color: #303030;
  `,
);

const MobileLogoContainer = styled.img(tw`items-center clickable w-7 h-7`);
const MobileCloseContainer = styled(ImageContainer)(tw`items-center`);
const MobileHR = styled.hr(
  tw`border-none mx-0 mb-2 mt-0 w-full h-2px`,
  css`
    background-color: ${(props) => props.theme.mobile_hr};
  `,
);

const MobileUserToolContainer = styled.div(tw`flex justify-between items-center mt-6`);

const MobileUserContainer = styled.div(
  tw`m-6 text-16`,
  css`
    color: ${(props) => props.theme.contrast_text};
  `,
);
const MobileUserContent = styled.div(
  tw`my-2 whitespace-normal`
);
const MobileLogoutButton = styled(Button)(
  tw`h-29px border-none rounded-2xl outline-none clickable`,
  css`
    color: ${(props) => props.theme.button_text};
    background-color: ${(props) => props.theme.button_background};
  `,
);

const MobileStyledPanelHomeHeader = styled(Panel)(
  tw`font-normal clickable py-4 pl-2 border-solid border-b-2`,
  css`
    border-color: ${(props) => props.theme.mobile_hr};

    .ant-collapse-header {
      display: flex;
      font-size: 20px;
      outline: none;
      margin-left: 1rem;
      margin-right: 1.5rem;
      justify-content: space-between;
      color: ${(props) => props.selected && props.theme.contrast_text};
    }
  `,
);

const MobileStyledPanelHeader = styled(Panel)(
  tw`font-normal clickable py-4 pl-2 border-solid border-b-2`,
  css`
    border-color: ${(props) => props.theme.mobile_hr};
    .ant-collapse-header {
      display: flex;
      font-size: 20px;
      outline: none;
      margin-left: 1rem;
      margin-right: 1.5rem;
      justify-content: space-between;
      color: ${(props) => props.selected && props.theme.contrast_text};
    }
    .ant-motion-collapse {
      transition: height 0.3s ease;
      overflow: hidden;
    }
    .ant-collapse-content-hidden {
      display: none;
    }
  `,
);

const MobileStyledPanelContent = styled.p(
  tw`font-normal text-16 clickable py-3 ml-6`,
);

const StyledLink = styled(Link)(
  tw``,
  css`
    &:focus,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
      color: ${(props) =>
        props.selected ? props.theme.contrast_text : 'inherit'};
    }
  `,
);

export {
  MobileSidebarWrapper,
  MobileToggleContainer,
  ToggleImageContainer,
  MobileSidebar,
  MobileUserToolContainer,
  MobileHeaderContainer,
  MobileLogoContainer,
  MobileCloseContainer,
  MobileHR,
  MobileUserContainer,
  MobileUserContent,
  MobileLogoutButton,
  MobileStyledPanelHomeHeader,
  MobileStyledPanelHeader,
  MobileStyledPanelContent,
  StyledLink,
};
