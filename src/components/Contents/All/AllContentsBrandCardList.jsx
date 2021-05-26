import React, { useState, useContext } from 'react';

import ColorContext from '../../../context/ColorContext';
import PromotionContext from '../../../context/PromotionContext';
// import MenuContext from '../../../context/MenuContext';
import useInfiniteScroll from '../../../lib/useInfiniteScroll';

import LoadingTools from '../../../constants/loadingItem';
import { UNTITLED, UNTITLED_PHRASE } from '../../../constants/contentsItem';
import '../styled/masonry.css';

import {
  replaceAll,
  // getSelectedBrandInfo,
  checkDuration,
  isNeedMoreFetch,
} from '../../../lib/Util';

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
  LoadingIcon,
  LastItem,
} from '../styled/desktop';

const AllContentsBrandCardList = () => {
  const { theme } = useContext(ColorContext);
  const { promotions, itemSize, setItemSize, loading } = useContext(
    PromotionContext,
  );
  // const { menuArr } = useContext(MenuContext);
  const [target, setTarget] = useState(null);

  useInfiniteScroll({
    target,
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting && isNeedMoreFetch(loading, itemSize, promotions)) {
        setItemSize((prevSize) => prevSize + 20);
      }
    },
  });

  return (
    <>
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
            <CustomCard
              key={`all_${title}_${id}`}
              onClick={() => window.open(url, '_blank')}
            >
              <CustomCardImg
                src={image}
                alt="Card image cap"
                // onClick={() => window.open(url, '_blank')}
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
      <LastItem ref={setTarget}>
        <LoadingIcon
          src={
            theme === 'light' ? LoadingTools.LogoWhite : LoadingTools.LogoBlack
          }
        />
      </LastItem>
    </>
  );
};

export default AllContentsBrandCardList;
