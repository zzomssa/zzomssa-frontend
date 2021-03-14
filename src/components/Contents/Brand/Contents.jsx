import React, { useContext } from 'react';

import MenuContext from '../../../context/MenuContext';
import PromotionContext from '../../../context/PromotionContext';

import { getSelectedContentsHeaderInfo } from '../../../lib/Util';

import ContentsHeader from './ContentsHeader';
import ContentsBrandCardList from './ContentsBrandCardList';
import ContentsMobileCardList from './ContentsMobileCardList';

const Contents = (props) => {
  const { match } = props;
  const { menu, categories } = useContext(MenuContext);
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
