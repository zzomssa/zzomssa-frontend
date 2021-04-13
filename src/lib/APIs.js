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

const getAllBrandPromotions = async (page, size) => {
  try {
    return await client.get(
      `${baseApiURL}/api/brands/promotions?page=${page}&size=${size}`,
    );
  } catch (e) {
    return null;
  }
};

const getBrandPromotions = async (contentId, page, size) => {
  try {
    return await client.get(
      `${baseApiURL}/api/brands/${contentId}/promotions?page=${page}&size=${size}`,
    );
  } catch (e) {
    return null;
  }
};

const getSearchBrand = async (name) => {
  try {
    return await client.get(`${baseApiURL}/api/search?name=${name}`);
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
