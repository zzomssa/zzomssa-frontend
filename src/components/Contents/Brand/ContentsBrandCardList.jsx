import React, { useContext } from 'react';
import PromotionContext from '../../../context/PromotionContext';

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

const DURATION = '기간 :';
const NONDURATION = '홈페이지 참조';

const checkDuration = (startAt, endAt) => {
  if (startAt && endAt) {
    return `${DURATION} ${startAt} ~ ${endAt}`;
  }
  return NONDURATION;
};

const descLengthOverCut = (desc) => {
  if (desc.length > 50) {
    return `${desc.substr(0, 50)} ...`;
  }
  return desc;
};

const ContentsBrandCardList = (props) => {
  const { promotions } = useContext(PromotionContext);
  const { brandName } = props;

  return (
    <CardListContainer>
      {promotions &&
        promotions.data &&
        promotions.data.map((promotion) => {
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
                    <CardText>{parsedDescription}</CardText>
                    <CardDuration>{duration}</CardDuration>
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

export default ContentsBrandCardList;
