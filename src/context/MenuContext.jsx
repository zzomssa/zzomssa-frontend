import React, { useState, useEffect, createContext } from 'react';

import * as API from '../lib/APIs';
import { makeMenu } from '../lib/Util';

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [categories, setCategories] = useState();
  const [menu, setMenu] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedSubCategory, setSelectedSubCategory] = useState(0);
  const menuArr = [];
  const value = {
    categories,
    menu,
    menuArr,
    selectedCategory,
    setSelectedCategory,
    selectedSubCategory,
    setSelectedSubCategory,
  };

  useEffect(() => {
    const getMenu = async () => {
      const _categories = await API.getCategory();
      const _brands = await API.getBrand();

      setCategories(_categories);
      if (_categories && _brands) setMenu(makeMenu(_categories, _brands));
    };
    getMenu();
    Object.values(menu).map((_value) => menuArr.push(..._value));
  }, []);

  // useEffect(() => {
  //   if (selectedCategory === 0 && selectedSubCategory === 0) {
  //   }
  // }, [selectedCategory, selectedSubCategory]);
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export default MenuContext;

export { MenuProvider };
