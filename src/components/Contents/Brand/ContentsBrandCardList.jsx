import React, { useState, useContext } from 'react';
import PromotionContext from '../../../context/PromotionContext';
import ColorContext from '../../../context/ColorContext';

import LoadingTools from '../../../constants/loadingItem';
import useInfiniteScroll from '../../../lib/useInfiniteScroll';

import {
  replaceAll,
  checkDuration,
  // descLengthOverCut
} from '../../../lib/Util';

import {
  CardListContainer,
  CustomCard,
  CustomCardImg,
  CustomCardBody,
  CardContent,
  CardTitle,
  CardText,
  CardDuration,
  CardBrandInfo,
  LoadingIcon,
  LastItem,
} from '../styled/desktop';

const ContentsBrandCardList = (props) => {
  const { brandName } = props;
  const { theme } = useContext(ColorContext);
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
          const {
            id,
            description,
            startAt,
            endAt,
            image,
            title,
            url,
          } = promotion;
          const duration = checkDuration(startAt, endAt);
          // const parsedDescription = descLengthOverCut(description);
          const refinedTitle = replaceAll(title, '\r\n', ' ');
          const refinedDesc = replaceAll(description, '\r\n', ' ');

          return (
            <CustomCard key={`brand_${title}_${id}`}>
              <CustomCardImg
                src={image}
                alt="Card image cap"
                onClick={() => window.open(url, '_blank')}
              />
              <CustomCardBody>
                <CardContent>
                  <CardTitle>{refinedTitle}</CardTitle>
                  <CardText>{refinedDesc}</CardText>
                  <CardDuration>{duration}</CardDuration>
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

export default ContentsBrandCardList;
