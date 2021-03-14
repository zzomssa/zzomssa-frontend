/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';

import PromotionContext from '../../../context/PromotionContext';

import AllContentsHeader from './AllContentsHeader';
import AllContentsBrandCardList from './AllContentsBrandCardList';
import AllContentsMobileCardList from './AllContentsMobileCardList';


const AllContents = (props) => {
  const { setSelectedContentsId } = useContext(PromotionContext);

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
      <AllContentsBrandCardList />
      <AllContentsMobileCardList />
    </>
  );
};
export default AllContents;
