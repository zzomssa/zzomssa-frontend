import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';


const ContentsHeaderContainer = styled.div(
  tw`mt-6 pl-6 md:(flow-root mt-10 pl-10 items-center)`,
);

const CategoryHeader = styled.div(
  tw`md:(font-bold) font-medium mb-6`,
  css`
    color: ${(props) => props.theme.contrast_text};
    @media (min-width: 768px) {
      font-size: 30px;
    }
    @media (max-width: 767px) {
      font-size: 20px;
    }
  `,
);
const BrandHeader = styled.div(
  tw`font-bold`,
  css`
    color: ${(props) => props.theme.contrast_text};
    @media (min-width: 768px) {
      font-size: 26px;
    }
    @media (max-width: 767px) {
      font-size: 20px;
    }
  `,
);
const ContentsHeader = (props) => {
  const { categoryName, contentsInfo } = props;

  return (
    <ContentsHeaderContainer>
      {categoryName && contentsInfo && (
        <>
          <CategoryHeader>{categoryName.toUpperCase()}</CategoryHeader>
          <BrandHeader>{contentsInfo.name}</BrandHeader>
        </>
      )}
    </ContentsHeaderContainer>
  );
};
export default ContentsHeader;
