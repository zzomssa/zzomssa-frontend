import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

import LoadingTools from '../../constants/loadingItem';

// const LoadingBackground = styled.div(tw`bg-black bg-opacity-50 outline-none`);

const LoadingIcon = styled.img(
  tw`w-10 h-10 z-100`,
  css`
    transform-origin: 50% 50%;
    animation: spin 1.5s cubic-bezier(0.8, 0, 0.2, 1) infinite;
    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
  `,
);

const Loading = () => (
  <LoadingIcon src={LoadingTools.Logo} />
  // <LoadingBackground>
  // </LoadingBackground>
);

export default Loading;
