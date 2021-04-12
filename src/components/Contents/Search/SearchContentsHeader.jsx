import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

import PromotionContext from '../../../context/PromotionContext';

import { ContentsHeaderContainer, CategoryHeader } from '../styled/desktop';

const SearchTermContent = styled.div(
  tw`md:(text-26) font-bold text-20`,
  css`
    color: ${(props) => props.theme.contrast_text};
  `,
);

const SearchContentsHeader = (props) => {
  const { searchTarget, promotions } = useContext(PromotionContext);
  const { categoryName } = props;

  return (
    <ContentsHeaderContainer>
      <>
        <CategoryHeader>{categoryName?.toUpperCase()}</CategoryHeader>
        <SearchTermContent>{promotions?.data?.length > 0 ? `"${searchTarget}"에 대한 검색결과 입니다.` : `"${searchTarget}"에 대한 검색결과가 없습니다.`}</SearchTermContent>
      </>
    </ContentsHeaderContainer>
  );
};
export default SearchContentsHeader;
