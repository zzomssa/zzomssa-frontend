import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import MenuContext from '../../../context/MenuContext';
import PromotionContext from '../../../context/PromotionContext';

import { getSelectedContentsHeaderInfo } from '../../../lib/Util';

import ContentsHeader from './ContentsHeader';
import ContentsBrandCardList from './ContentsBrandCardList';
import ContentsMobileCardList from './ContentsMobileCardList';

const Contents = (props) => {
  const { match } = props;
  const {
    selectedCategory,
    selectedSubCategory,
    menu,
    categories,
  } = useContext(MenuContext);
  if (selectedCategory === 0 && selectedSubCategory === 0) {
    return <Redirect to="/" />;
  }
  const { setSelectedContentsId } = useContext(PromotionContext);
  const { categoryName, contentsInfo } = getSelectedContentsHeaderInfo(
    match,
    menu,
    categories,
  );
  setSelectedContentsId(contentsInfo.id);

  return (
    <>
      <ContentsHeader categoryName={categoryName} contentsInfo={contentsInfo} />
      <ContentsBrandCardList brandName={contentsInfo.name} />
      <ContentsMobileCardList brandName={contentsInfo.name} />
    </>
  );
};
export default Contents;
