import React, { useState, useEffect, createContext } from 'react';
import * as API from '../lib/APIs';

const PromotionContext = createContext();

const PromotionProvider = ({ children }) => {
  const [promotions, setPromotions] = useState();
  const [selectedContentsId, setSelectedContentsId] = useState();

  const value = {
    promotions,
    setPromotions,
    selectedContentsId,
    setSelectedContentsId,
  };

  useEffect(() => {
    const getPromotions = async () => {
      if (selectedContentsId === 0) {
        const _promotions = await API.getAllBrandPromotions();
        setPromotions(_promotions);
      } else if (selectedContentsId) {
        const _promotions = await API.getBrandPromotions(selectedContentsId);
        setPromotions(_promotions);
      }
    };
    getPromotions();
  }, [selectedContentsId]);

  return (
    <PromotionContext.Provider value={value}>
      {children}
    </PromotionContext.Provider>
  );
};

export default PromotionContext;

export { PromotionProvider };
