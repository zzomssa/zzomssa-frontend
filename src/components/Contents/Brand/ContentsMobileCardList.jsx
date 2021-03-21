import React, { useContext } from 'react';
import PromotionContext from '../../../context/PromotionContext';

import {
  CardListContainer,
  CustomCard,
  CustomCardImg,
  CustomCardBody,
  CardContent,
  CardTitle,
  CardDuration,
  CardBrandInfo,
} from '../styled/mobile';

const ContentsMobileCardList = (props) => {
  const { promotions } = useContext(PromotionContext);
  const { brandName } = props;

  return (
    <CardListContainer>
      {promotions?.data?.map((promotion) => {
        const { id, description, image, title, url } = promotion;
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
                  <CardTitle>{title}</CardTitle>
                  <CardDuration>{description}</CardDuration>
                </CardContent>
                <CardBrandInfo>{brandName}</CardBrandInfo>
              </CustomCardBody>
            </CustomCard>
          </>
        );
      })}
    </CardListContainer>
  );
};

export default ContentsMobileCardList;
