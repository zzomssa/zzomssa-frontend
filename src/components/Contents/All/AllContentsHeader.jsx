import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

import {
  ContentsHeaderContainer,
  ContentsSubHeaderContainer,
  CategoryHeader,
} from '../styled/desktop';
import KakaoShareButton from '../Share/KakaoShareButton';

const BrandHeader = styled.div(
  tw`md:(text-26) font-normal text-20`,
  css`
    color: ${(props) => props.theme.contrast_text};
  `,
);

const AllContentsHeader = (props) => {
  const { categoryName, contentsInfo } = props;

  return (
    <ContentsHeaderContainer>
      <>
        <CategoryHeader>{categoryName?.toUpperCase()}</CategoryHeader>
        <ContentsSubHeaderContainer>
          <BrandHeader>{contentsInfo?.name}</BrandHeader>
          <KakaoShareButton brandName={contentsInfo?.name} />
        </ContentsSubHeaderContainer>
      </>
    </ContentsHeaderContainer>
  );
};
export default AllContentsHeader;
