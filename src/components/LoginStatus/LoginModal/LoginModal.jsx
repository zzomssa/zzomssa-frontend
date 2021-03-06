import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
// import KaKaoLogin from 'react-kakao-login';
import { useAlert } from 'react-alert';

// import { postLoginInfo } from '../../../lib/APIs';
import LoginTools from '../../../constants/loginItem';
// import LoginContext from '../../../context/LoginContext';

// const KAKAO_TOKEN = '9030c74246944b49373d6baa1f446d7e';
const LOGIN_TEXT = '로그인';
const KAKAO_BUTTON = '카카오 계정으로 로그인하기';
const NONLOGIN_BUTTON = '비회원으로 사이트 이용하기';
const ALERT_TEXT ='카카오 로그인 기능은 현재 개발 중입니다!';
const ModalBackground = styled.div(
  tw`fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50 z-50 outline-none`,
);

const ModalContent = styled.div(
  tw`fixed left-2/4 top-1/3 transform -translate-x-2/4 -translate-y-2/4 py-6 bg-white z-100 outline-none rounded-md text-xl font-bold
  md:(px-6)`,
);

const LoginText = styled.div(
  tw`absolute left-2/4 transform -translate-x-2/4 sm:text-2xl font-medium text-black text-center`,
);

const DeleteButton = styled.img(
  tw`block w-5 h-5 float-right clickable mr-5 md:(mr-0)`,
);

const LoginWrapper = styled.div(
  tw`mx-4 mt-12`
);

const Imagewrapper = styled.div(
  tw` flex text-14 font-bold items-center justify-center w-222px h-50px clickable rounded-lg md:(text-16)`,
  css`
    margin: 5% auto;
    background-color: ${(props) =>
      props.color === 'true' ? 'black' : '#f9e000'};
    color: ${(props) => (props.color === 'true' ? 'white' : 'black')};
  `,
);

// const KaKaoBtn = styled(Button)(
//   tw`font-bold p-0 clickable overflow-hidden`,
//   css`
//     border-radius: 10px !important;
//     background-color: #f9e000 !important;
//     font-family: 'Lato';
//     outline: none;
//     @media (max-width: 400px) {
//       font-size: 14px !important;
//     }
//   `,
// );

const LoginModal = (props) => {
  const { displayHandler } = props;
  const alert = useAlert();

  const handleAlert = () => {
    alert.show(ALERT_TEXT);
  };
  // const { setIsLogged, setProfileNickName, setProfileId } = useContext(
  //   LoginContext,
  // );

  return (
    <>
      <ModalBackground onClick={displayHandler} />
      <ModalContent>
        <DeleteButton onClick={displayHandler} src={LoginTools.delete} />
        <LoginText>{LOGIN_TEXT}</LoginText>
        <LoginWrapper>
          <Imagewrapper onClick={handleAlert}>{KAKAO_BUTTON}</Imagewrapper>
          <Imagewrapper color="true" onClick={displayHandler}>
            {NONLOGIN_BUTTON}
          </Imagewrapper>
        </LoginWrapper>
      </ModalContent>
    </>
  );
};
export default LoginModal;
