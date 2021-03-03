import React, { useContext } from 'react';
import MenuContext from '../../context/MenuContext';

import { getSelectedBrandInfo } from '../../lib/Util';
import {
  CardListContainer,
  CustomCard,
  CustomCardImg,
  CustomCardBody,
  CardContent,
  CardTitle,
  CardDuration,
  CardBrandInfo,
} from './styled/mobile';

const MobileCardList = () => {
  const { menu, promotions } = useContext(MenuContext);

  return (
    <CardListContainer>
      {promotions &&
        promotions.data &&
        promotions.data.map((promotion) => {
          const { id, description, image, title, url, BrandId } = promotion;
          const selectedBrandInfo = getSelectedBrandInfo(menu, BrandId);
          return (
            <>
              {selectedBrandInfo && (
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
                    <CardBrandInfo>{selectedBrandInfo.name}</CardBrandInfo>
                  </CustomCardBody>
                </CustomCard>
              )}
            </>
          );
        })}
    </CardListContainer>
  );
};

export default MobileCardList;
