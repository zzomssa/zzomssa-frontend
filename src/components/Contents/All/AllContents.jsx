import React, { useContext, useEffect, lazy, Suspense } from 'react';

import { useWindowWidth } from '@react-hook/window-size';

import PromotionContext from '../../../context/PromotionContext';
import MenuContext from '../../../context/MenuContext';

import { DESK_MIN_WIDTH } from '../../../constants/responsiveItem';
import {
  HOME_CATEGORY_NAME,
  HOME_CATEGORY_INFO,
} from '../../../constants/contentsItem';

import AllContentsHeader from './AllContentsHeader';

const AllContentsBrandCardList = lazy(() =>
  import('./AllContentsBrandCardList'),
);
const AllContentsMobileCardList = lazy(() =>
  import('./AllContentsMobileCardList'),
);

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
        <Suspense fallback={<> </>}>
          <AllContentsBrandCardList />
        </Suspense>
      ) : (
        <Suspense fallback={<> </>}>
          <AllContentsMobileCardList />
        </Suspense>
      )}
    </>
  );
};
export default AllContents;
