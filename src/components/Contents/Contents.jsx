import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import MenuContext from '../../context/MenuContext';
import { getSelectedBrandInfo } from '../../lib/Util';

import ContentsHeader from './ContentsHeader';
import CardList from './CardList';
import MobileCardList from './MobileCardList';

const Contents = () => {
  const { menu, selectedBrand } = useContext(MenuContext);
  const selectedBrandInfo = getSelectedBrandInfo(menu, selectedBrand);

  return (
    <>
      {selectedBrandInfo && selectedBrandInfo.id === 0 ? (
        <>
          <Redirect to="/ALL" />
          <ContentsHeader selectedBrandInfo={selectedBrandInfo} />
          <CardList />
          <MobileCardList />
        </>
      ) : (
        <>
          <ContentsHeader selectedBrandInfo={selectedBrandInfo} />
          <CardList />
          <MobileCardList />
        </>
      )}
    </>
  );
};
export default Contents;
