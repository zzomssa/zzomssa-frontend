import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

const FAVORITEHEADER = 'FAVORITE';
const FavoriteBarContainer = styled.div(
  tw`hidden md:(block float-right w-1/4 h-screen pt-10 z-10 border-solid border-l text-center)`,
  css`
    border-color: ${(props) => props.theme.vertical_border};
  `,
);

const FavoriteBarHeader = styled.div(
  tw`font-normal text-28 clickable`,
  css`
    color: ${(props) => props.theme.contrast_text};
  `,
);

const FavoriteBarContentContainer = styled.div(
  tw`pt-6`,
  css`
    margin: 0 20%;
  `,
);

const FavoriteBarContent = styled.div(
  tw`w-full my-4 rounded-xl border border-dashed text-center leading-45px`
);

const temp = Array(4).fill('+');

const FavoriteBar = () => (
  <FavoriteBarContainer>
    <FavoriteBarHeader>{FAVORITEHEADER}</FavoriteBarHeader>
    <FavoriteBarContentContainer>
      {temp.map((v, index) => (
        <FavoriteBarContent key={index}>{v}</FavoriteBarContent>
      ))}
    </FavoriteBarContentContainer>
  </FavoriteBarContainer>
);

export default FavoriteBar;
