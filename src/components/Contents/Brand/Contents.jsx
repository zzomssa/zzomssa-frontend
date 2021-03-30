import React, { useContext, useEffect, useState } from 'react';
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
  const { setSelectedContentsId } = useContext(PromotionContext);

  const {
    selectedCategory,
    selectedSubCategory,
    menuArr,
    categories,
  } = useContext(MenuContext);

  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState();
  const [contentsInfo, setContentsInfo] = useState();

  if (selectedCategory === 0 && selectedSubCategory === 0) {
    return <Redirect to="/" />;
  }

  useEffect(() => {
    const { categoryName, contentsInfo } = getSelectedContentsHeaderInfo(
      match,
      menuArr,
      categories,
    );
    setCategoryName(categoryName);
    setContentsInfo(contentsInfo);
    setSelectedContentsId(contentsInfo.id);
    setLoading(false);
  }, [match]);

  return (
    !loading && (
      <>
        <ContentsHeader
          categoryName={categoryName}
          contentsInfo={contentsInfo}
        />
        {windowWitdh >= DESK_MIN_WIDTH ? (
          <ContentsBrandCardList brandName={contentsInfo.name} />
        ) : (
          <ContentsMobileCardList brandName={contentsInfo.name} />
        )}
      </>
    )
  );
};
export default Contents;
