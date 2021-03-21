import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import PromotionContext from '../../../context/PromotionContext';
import MenuContext from '../../../context/MenuContext';

import SearchContentsHeader from './SearchContentsHeader';
import SearchContentsBrandCardList from './SearchContentsBrandCardList';
import SearchContentsMobileCardList from './SearchContentsMobileCardList';

const SearchContents = () => {
  const { setSelectedContentsId } = useContext(PromotionContext);
  const {
    selectedCategory,
    selectedSubCategory,
  } = useContext(MenuContext);
  const categoryName = 'SEARCH';

  if (selectedCategory === 0 && selectedSubCategory === 0) {
    return <Redirect to="/" />;
  }

  setSelectedContentsId('SEARCH');

  return (
    <>
      <SearchContentsHeader categoryName={categoryName} />
      <SearchContentsBrandCardList />
      <SearchContentsMobileCardList />
    </>
  );
};
export default SearchContents;
