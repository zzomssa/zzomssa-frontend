import React, { useContext } from 'react';
import PromotionContext from '../../../context/PromotionContext';
// import MenuContext from '../../../context/MenuContext';

import {
  replaceAll,
  // getSelectedBrandInfo,
  checkDuration,
} from '../../../lib/Util';

import { UNTITLED, UNTITLED_PHRASE } from '../../../constants/contentsItem';
import '../styled/masonry.css';

import {
  Masonry,
  breakpointColumnsObj,
  // CardListContainer,
  CustomCard,
  CustomCardImg,
  CustomCardBody,
  CardContent,
  CardTitle,
  CardText,
  CardDuration,
  // CardBrandInfo,
} from '../styled/desktop';

const SearchContentsBrandCardList = () => {
  const { promotions } = useContext(PromotionContext);
  // const { menuArr } = useContext(MenuContext);
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {promotions?.data?.map((promotion) => {
        const {
          id,
          description,
          startAt,
          endAt,
          image,
          title,
          url,
          // brandId,
        } = promotion;
        const duration = checkDuration(startAt, endAt);
        const refinedTitle = replaceAll(title, '\r\n', ' ');
        const refinedDesc = replaceAll(description, '\r\n', ' ');
        // const selectedBrandInfo = getSelectedBrandInfo(menuArr, brandId);
        return (
          <CustomCard key={`search_${title}_${id}`}>
            <CustomCardImg
              src={image}
              alt="Card image cap"
              onClick={() => window.open(url, '_blank')}
            />
            <CustomCardBody>
              <CardContent>
                <CardTitle>
                  {UNTITLED === refinedTitle ? UNTITLED_PHRASE : refinedTitle}
                </CardTitle>
                {refinedDesc !== '' && <CardText>{refinedDesc}</CardText>}
                <CardDuration>{duration}</CardDuration>
              </CardContent>
              {/* <CardBrandInfo>{selectedBrandInfo?.name}</CardBrandInfo> */}
            </CustomCardBody>
          </CustomCard>
        );
      })}
    </Masonry>
  );
};

export default SearchContentsBrandCardList;
