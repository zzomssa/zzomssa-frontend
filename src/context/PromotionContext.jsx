import React, { useState, useEffect, createContext } from 'react';
import * as API from '../lib/APIs';

const PromotionContext = createContext();

const initialItemSize = 20;

const PromotionProvider = ({ children }) => {
  const [promotions, setPromotions] = useState();
  const [selectedContentsId, setSelectedContentsId] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTarget, setSearchTarget] = useState('');
  const [itemSize, setItemSize] = useState(initialItemSize);
  const [loading, setLoding] = useState(false);

  const value = {
    promotions,
    setPromotions,
    searchTerm,
    searchTarget,
    selectedContentsId,
    setSelectedContentsId,
    setSearchTerm,
    setSearchTarget,
    itemSize,
    setItemSize,
    loading,
  };

  useEffect(() => {
    const page = 1;
    const size = initialItemSize;
    setItemSize(initialItemSize);
    const getPromotions = async () => {
      if (selectedContentsId === 0) {
        const _promotions = await API.getAllBrandPromotions(page, size);
        setPromotions(_promotions);
      } else if (selectedContentsId === 'SEARCH') {
        const _promotions = await API.getSearchBrand(searchTerm);
        setSearchTarget(searchTerm);
        setPromotions(_promotions);
      } else if (selectedContentsId) {
        const _promotions = await API.getBrandPromotions(selectedContentsId);
        setPromotions(_promotions);
      }
    };
    getPromotions();
  }, [selectedContentsId]);

  useEffect(() => {
    const page = 1;
    const getMorePromotions = async () => {
      setLoding(true);
      if (selectedContentsId === 0) {
        const _promotions = await API.getAllBrandPromotions(page, itemSize);
        setPromotions(_promotions);
      } else if (selectedContentsId) {
        const _promotions = await API.getBrandPromotions(selectedContentsId, page, itemSize);
        setPromotions(_promotions);
      }
      setLoding(false);
    };
    getMorePromotions();
  }, [itemSize]);

  return (
    <PromotionContext.Provider value={value}>
      {children}
    </PromotionContext.Provider>
  );
};

export default PromotionContext;

export { PromotionProvider };
