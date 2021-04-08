import React, { useContext, useEffect } from 'react';

import { useWindowWidth } from '@react-hook/window-size';
import PromotionContext from '../../../context/PromotionContext';

import { DESK_MIN_WIDTH } from '../../../constants/responsiveItem';
import {
  HOME_CATEGORY_NAME,
  HOME_CATEGORY_INFO,
} from '../../../constants/contentsItem';
import MenuContext from '../../../context/MenuContext';

import AllContentsHeader from './AllContentsHeader';
import AllContentsBrandCardList from './AllContentsBrandCardList';
import AllContentsMobileCardList from './AllContentsMobileCardList';

const AllContents = () => {
  const { setSelectedContentsId } = useContext(PromotionContext);
  const { setSelectedCategory, setSelectedSubCategory } = useContext(
    MenuContext,
  );

  const windowWitdh = useWindowWidth();

  useEffect(() => {
    setSelectedCategory(0);
    setSelectedSubCategory(0);
    setSelectedContentsId(0);
  }, []);

  return (
    <>
      <AllContentsHeader
        categoryName={HOME_CATEGORY_NAME}
        contentsInfo={HOME_CATEGORY_INFO}
      />
      {windowWitdh >= DESK_MIN_WIDTH ? (
        <AllContentsBrandCardList />
      ) : (
        <AllContentsMobileCardList />
      )}
    </>
  );
};
export default AllContents;
