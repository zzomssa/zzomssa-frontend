import React, { useContext } from 'react';

import styled, { css } from 'styled-components';
import tw from 'twin.macro';

import ColorContext from '../../../context/ColorContext';
import { Moon, Sun } from '../../../constants/headerItem';

const ToggleContainer = styled.div(
  tw`relative flex clickable items-center w-65px h-27px p-px rounded-full`,
  css`
    background-color: #c4c4c4;
  `,
);

const ToggleButton = styled.div(
  tw`absolute flex items-center justify-center w-23px h-23px duration-300 rounded-full shadow-toggle`,
  css`
    background-color: ${(props) => (props.selected ? '#F2994A' : '#000000')};
    left: ${(props) => (props.selected ? '3px' : '42px')};
  `,
);

const ToggleImage = styled.img(tw`clickable w-full h-3.5`);

const DarkModeToggle = () => {
  const { theme, setTheme } = useContext(ColorContext);
  const selected = theme === 'light';

  const handleTheme = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');

  return (
    <ToggleContainer onClick={handleTheme}>
      <ToggleButton selected={selected}>
        {selected ? <ToggleImage src={Sun} /> : <ToggleImage src={Moon} />}
      </ToggleButton>
    </ToggleContainer>
  );
};

export default DarkModeToggle;
