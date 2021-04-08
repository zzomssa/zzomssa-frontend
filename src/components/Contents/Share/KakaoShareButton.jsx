/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Button } from 'antd';
import tw from 'twin.macro';

import { kakaoShareLogo } from '../../../constants/shareItem';

const CustomButton = styled(Button)(tw`outline-none border-0 m-0 p-0 clickable`);
const KakaoImg = styled.img(tw`w-6 h-6`);
const KakaoShareButton = (props) => {
  // useEffect(() => {
  //   createKakaoButton();
  // }, []);

  const createKakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      console.log(process.env.REACT_APP_KAKAO_KEY);
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }
      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '타이틀',
          description: '#리액트 #카카오 #공유버튼',
          imageUrl: 'IMAGE_URL', // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            webUrl: "https://www.naver.com",
          },
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              webUrl: window.location.href,
            },
          }
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
