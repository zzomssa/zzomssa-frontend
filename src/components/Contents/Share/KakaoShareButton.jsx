/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Button } from 'antd';
import tw from 'twin.macro';

import { kakaoShareLogo } from '../../../constants/shareItem';

const CustomButton = styled(Button)(
  tw`bg-transparent outline-none border-0 m-0 p-0 clickable float-right`,
);
const KakaoImg = styled.img(tw`w-7 h-7 rounded-lg`);
const KakaoShareButton = (props) => {
  const { categoryName } = props;
  const createKakaoButton = () => {
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
            webUrl: `https://www.zzomssa.com/brand${categoryName}`,
          },
        },
        buttons: [
          {
            title: '보러 가기!',
            link: {
              webUrl: `https://www.zzomssa.com/brand${categoryName}`,
            },
          },
        ],
      });
    }
  };
  return (
    <CustomButton id="kakao-link-btn" onClick={createKakaoButton}>
      <KakaoImg src={kakaoShareLogo} alt="kakao-share-icon" />
    </CustomButton>
  );
};
export default KakaoShareButton;
