import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

const ContentsHeaderContainer = styled.div(
  tw`mt-6 pl-6 md:(flow-root mt-10 pl-10 items-center)`,
);

const CategoryHeader = styled.div(
  tw`md:(font-bold text-30) font-medium text-20 mb-6`,
  css`
    color: ${(props) => props.theme.contrast_text};
  `,
);
// const BrandHeader = styled.div(
//   tw`md:(text-26) font-bold text-20`,
//   css`
//     color: ${(props) => props.theme.contrast_text};
//   `,
// );

const SearchContentsHeader = (props) => {
  const { categoryName } = props;

  return (
    <ContentsHeaderContainer>
      <>
        <CategoryHeader>{categoryName?.toUpperCase()}</CategoryHeader>
        {/* <BrandHeader>{contentsInfo.name}</BrandHeader> */}
      </>
    </ContentsHeaderContainer>
  );
};
export default SearchContentsHeader;
