import React, { useContext } from 'react';
import PromotionContext from '../../../context/PromotionContext';
import MenuContext from '../../../context/MenuContext';

import { getSelectedBrandInfo } from '../../../lib/Util';
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

const SearchContentsMobileCardList = () => {
  const { promotions } = useContext(PromotionContext);
  const { menuArr } = useContext(MenuContext);
  return (
    <CardListContainer>
      {promotions?.data?.map((promotion) => {
        const { id, description, image, title, url, BrandId } = promotion;
        const selectedBrandInfo = getSelectedBrandInfo(menuArr, BrandId);
        return (
          <CustomCard key={`search_mo_${title}_${id}`}>
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
              <CardBrandInfo>{selectedBrandInfo?.name}</CardBrandInfo>
            </CustomCardBody>
          </CustomCard>
        );
      })}
    </CardListContainer>
  );
};

export default SearchContentsMobileCardList;
