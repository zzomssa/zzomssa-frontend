import React, { useState, useContext } from 'react';
import PromotionContext from '../../../context/PromotionContext';
import LoadingTools from '../../../constants/loadingItem';
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
  const { promotions, setItemSize, loading } = useContext(PromotionContext);
  const [target, setTarget] = useState(null);

  useInfiniteScroll({
    target,
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting) {
        if (loading === false) setItemSize((prevSize) => prevSize + 20);
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
                  <CardTitle>{title}</CardTitle>
                  <CardDuration>{description}</CardDuration>
                </CardContent>
                <CardBrandInfo>{brandName}</CardBrandInfo>
              </CustomCardBody>
            </CustomCard>
          );
        })}
        <LastItem ref={setTarget}>
          <LoadingIcon src={LoadingTools.Logo} />
        </LastItem>
      </CardListContainer>
    </>
  );
};

export default ContentsMobileCardList;
