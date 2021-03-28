import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

import PromotionContext from '../../../context/PromotionContext';

const ContentsHeaderContainer = styled.div(
  tw`mt-6 pl-6 md:(flow-root mt-10 pl-10 items-center)`,
);

const CategoryHeader = styled.div(
  tw`md:(font-normal text-30) font-medium text-20 mb-6`,
  css`
    color: ${(props) => props.theme.contrast_text};
  `,
);
const SearchTermContent = styled.div(
  tw`md:(text-26) font-bold text-20`,
  css`
    color: ${(props) => props.theme.contrast_text};
  `,
);

const SearchContentsHeader = (props) => {
  const { searchTarget } = useContext(PromotionContext);
  const { categoryName } = props;

  return (
    <ContentsHeaderContainer>
      <>
        <CategoryHeader>{categoryName?.toUpperCase()}</CategoryHeader>
        <SearchTermContent>{`"${searchTarget}"에 대한 검색결과 입니다.`}</SearchTermContent>
      </>
    </ContentsHeaderContainer>
  );
};
export default SearchContentsHeader;
