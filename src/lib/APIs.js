import axios from 'axios';

const baseApiURL = 'https://zzomsa.tk';

const getBrand = async () => {
  try {
    const brands = await axios.get(`${baseApiURL}/api/brands`);
    return brands.data;
  } catch (e) {
    return null;
  }
};

const getCategory = async () => {
  try {
    const categories = await axios.get(`${baseApiURL}/api/categories`);
    return categories.data;
  } catch (e) {
    return null;
  }
};

const postLoginInfo = async (profileId, profileNickName) => {
  const profile = {
    profile_id: profileId.toString(),
    nickname: profileNickName,
  };
  try {
    return await axios.post(`${baseApiURL}/login`, profile);
  } catch (e) {
    return null;
  }
};

const getAllBrandPromotions = async () => {
  try {
    return await axios.get(`${baseApiURL}/api/promotions`);
  } catch (e) {
    return null;
  }
};

const getBrandPromotions = async (contentId) => {
  try {
    // 추후 paging처리 일단은 상수
    // if (brandId === 0) return await axios.get(`${baseApiURL}/api/brands/promotions?page=1&size=100`);
    // return await axios.get(`${baseApiURL}/api/brands/${brandId}/promotions?page=1&size=100`);
    return await axios.get(`${baseApiURL}/api/promotions/${contentId}`);
  } catch (e) {
    return null;
  }
};

const getSearchBrand = async (name) => {
  try {
    const result = await axios.get(
      `${baseApiURL}/api/brands/search?name=${name}`,
    );
    return result.data;
  } catch (e) {
    return null;
  }
};
export {
  getBrand,
  getCategory,
  postLoginInfo,
  getAllBrandPromotions,
  getBrandPromotions,
  getSearchBrand,
};
