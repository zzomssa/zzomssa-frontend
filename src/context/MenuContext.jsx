import React, { useState, useEffect, createContext } from 'react';

import * as API from '../lib/APIs';
import { makeMenu } from '../lib/Util';

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [categories, setCategories] = useState();
  const [menu, setMenu] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedSubCategory, setSelectedSubCategory] = useState(0);
  const [menuArr, setMenuArr] = useState([]);

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
      if (_categories && _brands) {
        const _menu = makeMenu(_categories, _brands);
        const _menuArr = [];

        Object.values(_menu).map((_value) => _menuArr.push(..._value));
        setMenu(_menu);
        setMenuArr(_menuArr);
      }
    };
    getMenu();
  }, []);

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export default MenuContext;

export { MenuProvider };
