import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

import { ContentsHeaderContainer, CategoryHeader } from '../styled/desktop';

const BrandHeader = styled.div(
  tw`md:(text-26) font-normal text-20`,
  css`
    color: ${(props) => props.theme.contrast_text};
  `,
);
const ContentsHeader = (props) => {
  const { categoryName, contentsInfo } = props;

  return (
    <ContentsHeaderContainer>
      <>
        <CategoryHeader>{categoryName?.toUpperCase()}</CategoryHeader>
        <BrandHeader>{contentsInfo?.name}</BrandHeader>
      </>
    </ContentsHeaderContainer>
  );
};
export default ContentsHeader;
