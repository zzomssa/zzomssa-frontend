/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useContext } from 'react';
import PromotionContext from '../../../context/PromotionContext';
import ColorContext from '../../../context/ColorContext';

import LoadingTools from '../../../constants/loadingItem';
import { UNTITLED, UNTITLED_PHRASE } from '../../../constants/contentsItem';

import useInfiniteScroll from '../../../lib/useInfiniteScroll';

import { replaceAll, checkDuration, isNeedMoreFetch } from '../../../lib/Util';
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
  LoadingIcon,
  LastItem,
} from '../styled/desktop';

const ContentsBrandCardList = () =>
  // props
  {
    // const { brandName } = props;
    const { theme } = useContext(ColorContext);
    const { promotions, itemSize, setItemSize, loading } = useContext(
      PromotionContext,
    );
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
            } = promotion;
            const duration = checkDuration(startAt, endAt);
            const refinedTitle = replaceAll(title, '\r\n', ' ');
            const refinedDesc = replaceAll(description, '\r\n', ' ');
            return (
              <CustomCard
                key={`brand_${title}_${id}`}
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
                      {UNTITLED === refinedTitle
                        ? UNTITLED_PHRASE
                        : refinedTitle}
                    </CardTitle>
                    {refinedDesc !== '' && <CardText>{refinedDesc}</CardText>}
                    <CardDuration>{duration}</CardDuration>
                  </CardContent>
                  {/* <CardBrandInfo>{brandName}</CardBrandInfo> */}
                </CustomCardBody>
              </CustomCard>
            );
          })}
        </Masonry>
        {promotions?.data && (
          <LastItem ref={setTarget}>
            <LoadingIcon
              src={
                theme === 'light'
                  ? LoadingTools.LogoWhite
                  : LoadingTools.LogoBlack
              }
            />
          </LastItem>
        )}
      </>
    );
  };

export default ContentsBrandCardList;
