import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

import Header from './Header';
import Banner from './Banner';
import Sidebar from './Sidebar';
import FavoriteBar from './FavoriteBar';

const Wrapper = styled.div(tw`relative w-full`);
const ContentWrapper = styled.div(tw`max-w-screen-2xl mx-auto`);
const ContentSection = styled.div(tw``, css``);

const Base = (props) => {
  const { children } = props;
  return (
    <Wrapper>
      <Header />
      <Banner />
      <ContentWrapper>
        <Sidebar />
        <FavoriteBar />
        <ContentSection>{children}</ContentSection>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Base;
