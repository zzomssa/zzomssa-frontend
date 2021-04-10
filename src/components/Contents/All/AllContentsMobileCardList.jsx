import React, { useState, useContext } from 'react';
import ColorContext from '../../../context/ColorContext';
import PromotionContext from '../../../context/PromotionContext';
import MenuContext from '../../../context/MenuContext';
import useInfiniteScroll from '../../../lib/useInfiniteScroll';

import LoadingTools from '../../../constants/loadingItem';
import { UNTITLED, UNTITLED_PHRASE } from '../../../constants/contentsItem';

import { getSelectedBrandInfo, isNeedMoreFetch } from '../../../lib/Util';
import {
  CardListContainer,
  CustomCard,
  CustomCardImg,
  CustomCardBody,
  CardContent,
  CardTitle,
  CardDuration,
  CardBrandInfo,
  LoadingIcon,
  LastItem,
} from '../styled/mobile';

const AllContentsMobileCardList = () => {
  const { theme } = useContext(ColorContext);
  const { promotions, itemSize, setItemSize, loading } = useContext(
    PromotionContext,
  );
  const { menuArr } = useContext(MenuContext);
  const [target, setTarget] = useState(null);

  useInfiniteScroll({
    target,
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting && isNeedMoreFetch(loading, itemSize, promotions)) {
        setItemSize((prevSize) => prevSize + 20);
      }
    },
  });

  return (
    <>
      <CardListContainer>
        {promotions?.data?.map((promotion) => {
          const { id, description, image, title, url, brandId } = promotion;
          const selectedBrandInfo = getSelectedBrandInfo(menuArr, brandId);
          return (
            <CustomCard key={`all_mo_${title}_${id}`}>
              <CustomCardImg
                src={image}
                alt="Card image cap"
                onClick={() => window.open(url, '_blank')}
              />
              <CustomCardBody>
                <CardContent>
                  <CardTitle>
                    {UNTITLED === title ? UNTITLED_PHRASE : title}
                  </CardTitle>
                  <CardDuration>{description}</CardDuration>
                </CardContent>
                <CardBrandInfo>{selectedBrandInfo?.name}</CardBrandInfo>
              </CustomCardBody>
            </CustomCard>
          );
        })}
        <LastItem ref={setTarget}>
          <LoadingIcon
            src={
              theme === 'light'
                ? LoadingTools.LogoWhite
                : LoadingTools.LogoBlack
            }
          />
        </LastItem>
      </CardListContainer>
    </>
  );
};

export default AllContentsMobileCardList;
