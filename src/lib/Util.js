const DURATION = '기간 :';
const NONDURATION = '홈페이지 참조';

const makeMenu = (categories, brands) => {
  let menu = {};
  categories.map((category) => {
    const brandArray = brands.filter(
      (brand) => brand.CategoryId === category.id,
    );
    menu = {
      ...menu,
      [category.name]: brandArray,
    };
    return null;
  });
  return menu;
};

const getCategoryName = (categories, selectedCategory) => {
  const categoryInfo = categories.filter(
    (category) => category.id === selectedCategory,
  );
  return categoryInfo[0] ? categoryInfo[0].name : null;
};

const getSelectedBrandInfo = (menu, selectedBrand) => {
  const menuArr = [];
  Object.values(menu).map((value) => menuArr.push(...value));
  const _selectedBrandInfo = menuArr.filter(
    (brand) => brand.id === selectedBrand,
  );
  return _selectedBrandInfo[0];
};

const getSelectedContentsHeaderInfo = (match, menu, categories) => {
  const { params } = match;
  const subCategory = params.subcategory;

  const menuArr = [];
  Object.values(menu).map((value) => menuArr.push(...value));

  const _selectedContentsInfo = menuArr.filter(
    (_subCategory) => _subCategory.name === subCategory,
  );

  if (_selectedContentsInfo.length > 0) {
    const [contentsInfo] = _selectedContentsInfo;
    const categoryName = getCategoryName(categories, contentsInfo.CategoryId);
    return { categoryName, contentsInfo };
  }
  return { categoryName: '', contentsInfo: '' };
};

const replaceAll = (str, searchStr, replaceStr) =>
  str.split(searchStr).join(replaceStr);

const checkDuration = (startAt, endAt) =>
  startAt && endAt ? `${DURATION} ${startAt} ~ ${endAt}` : NONDURATION;

const descLengthOverCut = (desc) =>
  desc?.length > 35 ? `${desc.substr(0, 35)} ...` : desc;

export {
  makeMenu,
  getCategoryName,
  getSelectedBrandInfo,
  getSelectedContentsHeaderInfo,
  replaceAll,
  checkDuration,
  descLengthOverCut,
};
