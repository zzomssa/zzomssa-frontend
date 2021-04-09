/* eslint-disable no-console */
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Button } from 'antd';
import tw from 'twin.macro';

import { kakaoShareLogo } from '../../../constants/shareItem';

const CustomButton = styled(Button)(
  tw`bg-transparent outline-none border-0 m-0 p-0 clickable float-right`,
);

const KakaoImg = styled.img(tw`w-7 h-7 rounded-lg`);

const createKakaoButton = (brandName = '') => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }
    kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
      content: {
        title: '타이틀',
        description: '#리액트 #카카오 #공유버튼',
        imageUrl: 'IMAGE_URL', // i.e. process.env.FETCH_URL + '/logo.png'
        link: {
          webUrl: `https://www.zzomssa.com/brand/${brandName}`,
        },
      },
      buttons: [
        {
          title: '보러 가기!',
          link: {
            webUrl: `https://www.zzomssa.com/brand/${brandName}`,
          },
        },
      ],
    });
  }
};

const KakaoShareButton = (props) => {
  const { brandName } = props;

  useEffect(() => {
    if (brandName === 'ALL') createKakaoButton(brandName);
    else createKakaoButton();
  }, [brandName]);

  return (
    <CustomButton id="kakao-link-btn">
      <KakaoImg src={kakaoShareLogo} alt="kakao-share-icon" />
    </CustomButton>
  );
};
export default KakaoShareButton;
