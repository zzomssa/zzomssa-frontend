import React, { useState, useContext } from 'react';
import PromotionContext from '../../../context/PromotionContext';

import useInfiniteScroll from '../../../lib/useInfiniteScroll';

import {
  replaceAll,
  checkDuration,
  descLengthOverCut,
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
  LastItem,
} from '../styled/desktop';

const ContentsBrandCardList = (props) => {
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
          const parsedDescription = descLengthOverCut(description);
          const refinedTitle = replaceAll(title, '\r\n', ' ');
          const refinedDesc = replaceAll(parsedDescription, '\r\n', ' ');

          return (
            <>
              <CustomCard key={id}>
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
            </>
          );
        })}
      </CardListContainer>
      <LastItem ref={setTarget} />
    </>
  );
};

export default ContentsBrandCardList;
