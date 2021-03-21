import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

const MOBILE_FAVORITE_HEADER = 'FAVORITE';

const MobileFavoriteBarContainer = styled.div(tw`md:(hidden) mt-6 mx-6`);
const MobileFavoriteBarHeader = styled.div(
  tw`mb-6 text-20`,
  css`
    color: ${(props) => props.theme.contrast_text};
  `,
);

const MobileFavoriteBarContent = styled.div(
  tw`w-full my-4 rounded-xl border border-dashed text-center leading-45px`
);

const temp = Array(4).fill('+');

const MobileFavoriteBar = () => (
  <MobileFavoriteBarContainer>
    <MobileFavoriteBarHeader>
      {MOBILE_FAVORITE_HEADER}
    </MobileFavoriteBarHeader>
    {temp.map((v, index) => (
      <MobileFavoriteBarContent key={index}>{v}</MobileFavoriteBarContent>
      ))}
  </MobileFavoriteBarContainer>
  );

export default MobileFavoriteBar;
