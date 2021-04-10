import React, { useContext, useEffect, lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size';

import PromotionContext from '../../../context/PromotionContext';
import MenuContext from '../../../context/MenuContext';

import { DESK_MIN_WIDTH } from '../../../constants/responsiveItem';
import { SEARCH_CATEGORY_NAME } from '../../../constants/contentsItem';

import SearchContentsHeader from './SearchContentsHeader';

const SearchContentsBrandCardList = lazy(() =>
  import('./SearchContentsBrandCardList'),
);
const SearchContentsMobileCardList = lazy(() =>
  import('./SearchContentsMobileCardList'),
);

const SearchContents = () => {
  const { setSelectedContentsId } = useContext(PromotionContext);
  const { selectedCategory, selectedSubCategory } = useContext(MenuContext);
  const windowWitdh = useWindowWidth();

  if (selectedCategory === 0 && selectedSubCategory === 0) {
    return <Redirect to="/" />;
  }

  useEffect(() => {
    setSelectedContentsId(SEARCH_CATEGORY_NAME);
  }, []);

  return (
    <>
      <SearchContentsHeader categoryName={SEARCH_CATEGORY_NAME} />
      {windowWitdh >= DESK_MIN_WIDTH ? (
        <Suspense fallback={<> </>}>
          <SearchContentsBrandCardList />
        </Suspense>
      ) : (
        <Suspense fallback={<> </>}>
          <SearchContentsMobileCardList />
        </Suspense>
      )}
    </>
  );
};
export default SearchContents;
