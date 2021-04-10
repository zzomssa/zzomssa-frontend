import styled, { css } from 'styled-components';
// import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const SidebarContainer = styled.div(
  tw`hidden truncate md:(h-screen block sticky top-20 w-1/4 pt-10 z-10 border-solid border-r float-left)`,
  css`
    border-color: ${(props) => props.theme.vertical_border};
  `,
);

const StyledPanelHomeHeader = styled(Panel)(
  tw`font-normal clickable py-2`,
  css`
    .ant-collapse-header {
      width: 1px;
      font-size: 28px;
      @media (min-width: 1522px) {
        margin: 0 10rem;
      }
      @media (min-width: 1000px) and (max-width: 1521px) {
        margin: 0 4rem;
      }
      margin: 0 1rem;
      outline: none;
      &:hover {
        color: ${(props) => props.theme.contrast_text};
      }
      color: ${(props) => props.selected && props.theme.contrast_text};
    }
  `,
);

const StyledPanelHeader = styled(Panel)(
  tw`font-normal clickable py-2`,
  css`
    .ant-collapse-header {
      width: 1px;
      font-size: 28px;
      @media (min-width: 1522px) {
        margin: 0 10rem;
      }
      @media (min-width: 1000px) and (max-width: 1521px) {
        margin: 0 4rem;
      }
      margin: 0 1rem;
      outline: none;
      &:hover {
        color: ${(props) => props.theme.contrast_text};
      }
      color: ${(props) => props.selected && props.theme.contrast_text};
    }
    .ant-collapse-content {
      width: 1px;
      @media (min-width: 1522px) {
        margin: 0 11rem;
      }
      @media (min-width: 1000px) and (max-width: 1521px) {
        margin: 0 5rem;
      }
      margin: 0 2rem;
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

const StyledPanelContent = styled.p(
  tw`font-normal text-22 clickable py-3`,
  css`
    &:hover {
      color: ${(props) => props.theme.contrast_text};
    },
    &:active {
      text-decoration: none;
      color: ${(props) =>
        props.selected ? props.theme.contrast_text : 'inherit'};
    }
  `,
);

// const StyledLink = styled(Link)(
//   tw`font-normal`,
//   css`
//     &:focus,
//     &:visited,
//     &:link,
//     &:active {
//       text-decoration: none;
//       color: ${(props) =>
//         props.selected ? props.theme.contrast_text : 'inherit'};
//     }
//   `,
// );
export {
  SidebarContainer,
  StyledPanelHomeHeader,
  StyledPanelHeader,
  StyledPanelContent,
};
