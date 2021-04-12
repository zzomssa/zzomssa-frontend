/* eslint-disable no-console */
import React, { useState, useContext } from 'react';
import styled, { css } from 'styled-components';
import { InputGroup, Input } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';

import tw from 'twin.macro';
import { iconSearch, iconX } from '../../constants/searchItem';
import PromotionContext from '../../context/PromotionContext';
import MenuContext from '../../context/MenuContext';

const ALERT_TEXT = '두글자 이상 입력해주세요!';

const INPUT_PLACEHOLDER = '검색';
const SearchContainer = styled.div(
  tw`fixed w-full z-100 h-80px flex justify-center items-center`,
  css`
    background-color: #303030;
  `,
);
// const StyledLink = styled(Link)(tw`flex items-center`);

const SearchBar = styled(InputGroup)(
  tw`rounded-3xl flex flex-row h-35px items-center`,
  css`
    background-color: #747474;
  `,
);

const StyledInput = styled(Input)(
  tw`bg-transparent border-0 border-l-2 pl-2 outline-none text-white text-18`,
  css`
    border-color: #4646;
    &::placeholder {
      color: #464646;
    }
  `,
);

const SearchCloseButton = styled.div(
  tw`fixed z-100 left-2/4 transform -translate-x-2/4 leading-6px`,
  css`
    margin-top: 85px;
    background-color: #747474;
    border-radius: 50%;
    line-height: 6px;
  `,
);

const SearchCloseImage = styled.img(tw`p-1.5 clickable w-6 h-6`);
const ImageContainer = styled.img(tw`mx-4 clickable w-5 h-5`);

const Search = (props) => {
  const { handleSearch } = props;
  const { setSearchTarget } = useContext(PromotionContext);
  const { setSelectedCategory, setSelectedSubCategory } = useContext(
    MenuContext,
  );
  const history = useHistory();
  const alert = useAlert();

  const [searchTerm, setSearchTerm] = useState('');

  const handleInput = (e) => setSearchTerm(e.target.value);
  const handleClick = () => {
    if (searchTerm?.length > 1) {
      setSelectedCategory(-1);
      setSelectedSubCategory(-1);
      setSearchTarget(searchTerm);
      history.push('/search');
    } else {
      alert.show(ALERT_TEXT);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <>
      <SearchContainer>
        <SearchBar>
          {/* <StyledLink to="/search">
          </StyledLink> */}
          <ImageContainer src={iconSearch} onClick={handleClick} />
          <StyledInput
            placeholder={INPUT_PLACEHOLDER}
            value={searchTerm}
            onChange={handleInput}
            onKeyPress={handleKeyPress}
          />
          <ImageContainer src={iconX} onClick={() => setSearchTerm('')} />
        </SearchBar>
      </SearchContainer>
      <SearchCloseButton onClick={handleSearch}>
        <SearchCloseImage src={iconX} />
      </SearchCloseButton>
    </>
  );
};

export default Search;
