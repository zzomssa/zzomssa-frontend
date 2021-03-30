import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size';

import PromotionContext from '../../../context/PromotionContext';
import MenuContext from '../../../context/MenuContext';

import { DESK_MIN_WIDTH } from '../../../constants/responsiveItem';

import SearchContentsHeader from './SearchContentsHeader';
import SearchContentsBrandCardList from './SearchContentsBrandCardList';
import SearchContentsMobileCardList from './SearchContentsMobileCardList';

const categoryName = 'SEARCH';

const SearchContents = () => {
  const { setSelectedContentsId } = useContext(PromotionContext);
  const { selectedCategory, selectedSubCategory } = useContext(MenuContext);
  const windowWitdh = useWindowWidth();

  if (selectedCategory === 0 && selectedSubCategory === 0) {
    return <Redirect to="/" />;
  }

  useEffect(() => {
    setSelectedContentsId('SEARCH');
  }, []);

  return (
    <>
      <SearchContentsHeader categoryName={categoryName} />
      {windowWitdh >= DESK_MIN_WIDTH ? (
        <SearchContentsBrandCardList />
      ) : (
        <SearchContentsMobileCardList />
      )}
    </>
  );
};
export default SearchContents;
