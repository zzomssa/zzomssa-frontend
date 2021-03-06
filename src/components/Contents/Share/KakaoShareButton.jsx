/* eslint-disable no-console */
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Button } from 'antd';
import tw from 'twin.macro';

import {
  kakaoShareLogo,
  ZZOMSSA_URL,
  ZZOMSSA_NAME,
  ZZOMSSA_INTRO
} from '../../../constants/shareItem';

const CustomButton = styled(Button)(
  tw`bg-transparent outline-none border-0 m-0 p-0 clickable float-right`,
);

const KakaoImg = styled.img(tw`w-7 h-7 rounded-lg`);

const createKakaoButton = (brandName = null) => {
  const webUrl = brandName
    ? `${ZZOMSSA_URL}/brand/${brandName}`
    : `${ZZOMSSA_URL}`;

  const shareTitle = brandName
    ? `${brandName} | ${ZZOMSSA_NAME}`
    : `${ZZOMSSA_NAME}`;

  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }
    kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
      content: {
        title: shareTitle,
        description: '쫌싸로 할인 중인 기획전 GET!',
        imageUrl: `https://zzomssa.com${ZZOMSSA_INTRO}`,
        imageHeight: 200,
        link: {
          mobileWebUrl: webUrl,
          webUrl,
        },
      },
      buttons: [
        {
          title: '쫌싸로 보러가기!',
          link: {
            mobileWebUrl: webUrl,
            webUrl,
          },
        },
      ],
    });
  }
};

const KakaoShareButton = (props) => {
  const { brandName } = props;

  useEffect(() => {
    if (brandName === 'ALL') createKakaoButton();
    else createKakaoButton(brandName);
  }, [brandName]);

  return (
    <CustomButton id="kakao-link-btn">
      <KakaoImg src={kakaoShareLogo} alt="kakao-share-icon" />
    </CustomButton>
  );
};
export default KakaoShareButton;
