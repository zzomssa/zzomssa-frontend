import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Button } from 'antd';

import LoginTools from '../../../constants/loginItem';
import LoginContext from '../../../context/LoginContext';

const IntroContent = '쫌싸에 오신 것을 환영합니다.';
const LogoutContent = '로그아웃';

const ModalBackground = styled.div(
  tw` fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50 z-20 outline-none`,
);

const ModalContent = styled.div(
  tw` left-2/4 transform -translate-x-2/4 mt-40 py-6 bg-white absolute z-30 outline-none rounded-md text-xl font-bold text-black
  sm:mt-40 md:(px-6)`
);

const DeleteButton = styled.img(tw`block w-5 h-5 float-right clickable`, css``);

const LogoutButton = styled(Button)(
  tw`mt-2 mb-4 h-25px border-none rounded-2xl float-right outline-none clickable`
);

const LoginWrapper = styled.div(
  tw`mx-4 mb-4`,
  css`
    margin-top: 0px;
    @media (min-width: 768px) {
      margin-top: 30px;
    }
    @media (min-width: 1024px) {
      margin-top: 40px;
    }
  `,
);

const UserContent = styled.p(tw``,css``);

const LoggedModal = (props) => {
  const { displayHandler } = props;
  const { setIsLogged, profileNickName, setProfileNickName, setProfileId } = useContext(LoginContext);

  return (
    <>
      <ModalBackground />
      <ModalContent>
        <DeleteButton onClick={displayHandler} src={LoginTools.delete} />
        <LoginWrapper>
          <UserContent>{profileNickName}님,</UserContent>
          <UserContent>{IntroContent}</UserContent>
        </LoginWrapper>
        <LogoutButton
          onClick={() => {
            displayHandler();
            setIsLogged(false);
            setProfileNickName();
            setProfileId();
          }}
        >
          {LogoutContent}
        </LogoutButton>
      </ModalContent>
    </>
  );
};
export default LoggedModal;
