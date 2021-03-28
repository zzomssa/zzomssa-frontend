import React, { useContext } from 'react';

import { useWindowWidth } from '@react-hook/window-size';
import PromotionContext from '../../../context/PromotionContext';

import { DESK_MIN_WIDTH } from '../../../constants/responsiveItem';

import AllContentsHeader from './AllContentsHeader';
import AllContentsBrandCardList from './AllContentsBrandCardList';
import AllContentsMobileCardList from './AllContentsMobileCardList';

const AllContents = () => {
  const { setSelectedContentsId } = useContext(PromotionContext);
  const windowWitdh = useWindowWidth();

  const categoryName = 'HOME';
  const contentsInfo = {
    name: 'ALL',
  };
  setSelectedContentsId(0);

  return (
    <>
      <AllContentsHeader
        categoryName={categoryName}
        contentsInfo={contentsInfo}
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
