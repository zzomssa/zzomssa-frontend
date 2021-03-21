import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import BannerImages from '../../../constants/bannerItem';

const BannerContainer = styled.div(
  css`
    .carousel .thumbs-wrapper {
      margin: 0 !important;
    }
  `,
);

const BannerImage = styled.img(
  tw`w-full`,
  css`
    margin-top: 50px;
    @media (min-width: 768px) {
      height: 320px;
    }
    @media (max-width: 767px) {
      height: 100px;
    }
  `,
);

const Banner = () => (
  <BannerContainer>
    <Carousel autoPlay infiniteLoop stopOnHover showThumbs={false} showArrows={false}>
      {BannerImages?.map((imageSrc, index) => (
        <BannerImage key={index} src={imageSrc} />
      ))}
    </Carousel>
  </BannerContainer>
);
export default Banner;
