import React, { useContext } from 'react';
import PromotionContext from '../../../context/PromotionContext';
import MenuContext from '../../../context/MenuContext';

import {
  replaceAll,
  getSelectedBrandInfo,
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
} from '../styled/desktop';

const SearchContentsBrandCardList = () => {
  const { promotions } = useContext(PromotionContext);
  const { menu } = useContext(MenuContext);
  return (
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
        const parsedDescription = descLengthOverCut(description);
        const refinedTitle = replaceAll(title, '\r\n', ' ');
        const refinedDesc = replaceAll(parsedDescription, '\r\n', ' ');
        const selectedBrandInfo = getSelectedBrandInfo(menu, BrandId);
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
                <CardBrandInfo>{selectedBrandInfo?.name}</CardBrandInfo>
              </CustomCardBody>
            </CustomCard>
          </>
        );
      })}
    </CardListContainer>
  );
};

export default SearchContentsBrandCardList;
