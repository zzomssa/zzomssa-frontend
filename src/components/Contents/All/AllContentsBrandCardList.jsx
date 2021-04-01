import React, { useState, useContext } from 'react';
import PromotionContext from '../../../context/PromotionContext';
import MenuContext from '../../../context/MenuContext';
import useInfiniteScroll from '../../../lib/useInfiniteScroll';

import LoadingTools from '../../../constants/loadingItem';

import {
  replaceAll,
  getSelectedBrandInfo,
  checkDuration,
  // descLengthOverCut,
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

const AllContentsBrandCardList = () => {
  const { promotions, setItemSize, loading } = useContext(PromotionContext);
  const { menuArr } = useContext(MenuContext);
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
            BrandId,
          } = promotion;
          const duration = checkDuration(startAt, endAt);
          // const parsedDescription = descLengthOverCut(description);
          const refinedTitle = replaceAll(title, '\r\n', ' ');
          const refinedDesc = replaceAll(description, '\r\n', ' ');
          const selectedBrandInfo = getSelectedBrandInfo(menuArr, BrandId);
          return (
            <CustomCard key={`all_${title}_${id}`}>
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
                <CardBrandInfo>{selectedBrandInfo?.name}</CardBrandInfo>
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

export default AllContentsBrandCardList;
