import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { useWindowWidth } from '@react-hook/window-size';

import MenuContext from '../../../context/MenuContext';
import PromotionContext from '../../../context/PromotionContext';

import { getSelectedContentsHeaderInfo } from '../../../lib/Util';

import { DESK_MIN_WIDTH } from '../../../constants/responsiveItem';

import ContentsHeader from './ContentsHeader';
import ContentsBrandCardList from './ContentsBrandCardList';
import ContentsMobileCardList from './ContentsMobileCardList';

const Contents = (props) => {
  const { match } = props;
  const windowWitdh = useWindowWidth();

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
      {windowWitdh >= DESK_MIN_WIDTH ? (
        <ContentsBrandCardList brandName={contentsInfo.name} />
      ) : (
        <ContentsMobileCardList brandName={contentsInfo.name} />
      )}
    </>
  );
};
export default Contents;
