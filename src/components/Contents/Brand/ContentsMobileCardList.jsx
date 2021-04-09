import React, { useState, useContext } from 'react';
import PromotionContext from '../../../context/PromotionContext';
import ColorContext from '../../../context/ColorContext';

import LoadingTools from '../../../constants/loadingItem';
import { UNTITLED, UNTITLED_PHRASE } from '../../../constants/contentsItem';

import useInfiniteScroll from '../../../lib/useInfiniteScroll';

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

const ContentsMobileCardList = (props) => {
  const { brandName } = props;
  const { theme } = useContext(ColorContext);
  const { promotions, itemSize, setItemSize, loading } = useContext(PromotionContext);
  const [target, setTarget] = useState(null);

  useInfiniteScroll({
    target,
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting) {
        if (loading === false) {
          if (!(itemSize > 40 && promotions?.data?.length === 0))
            if (!(Math.abs(promotions?.data?.length - itemSize) > 20)) 
              setItemSize((prevSize) => prevSize + 20);
        }
      }
    },
  });

  return (
    <>
      <CardListContainer>
        {promotions?.data?.map((promotion) => {
          const { id, description, image, title, url } = promotion;
          return (
            <CustomCard key={`brand_mo_${title}_${id}`}>
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
                <CardBrandInfo>{brandName}</CardBrandInfo>
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

export default ContentsMobileCardList;
