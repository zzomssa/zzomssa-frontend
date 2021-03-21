// import axios from 'axios';
import client from './Axios';

const baseApiURL = 'https://zzomsa.tk';

const getBrand = async () => {
  try {
    const brands = await client.get(`${baseApiURL}/api/brands`);
    return brands.data;
  } catch (e) {
    return null;
  }
};

const getCategory = async () => {
  try {
    const categories = await client.get(`${baseApiURL}/api/categories`);
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
    return await client.post(`${baseApiURL}/login`, profile);
  } catch (e) {
    return null;
  }
};

const getAllBrandPromotions = async () => {
  try {
    return await client.get(`${baseApiURL}/api/promotions`);
  } catch (e) {
    return null;
  }
};

const getBrandPromotions = async (contentId) => {
  try {
    // 추후 paging처리 일단은 상수
    return await client.get(
      `${baseApiURL}/api/brands/${contentId}/promotions?page=1&size=20`,
    );
  } catch (e) {
    return null;
  }
};

const getSearchBrand = async (name) => {
  try {
    const result = await client.get(
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
