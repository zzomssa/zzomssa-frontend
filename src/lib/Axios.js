import axios from 'axios';
/**
 * Global Setting example
 *
 * [API 주소를 다른 곳으로 사용함]
 * client.defaults.baseURL = 'https://external-api-server.com/'
 *
 * [헤더 설정]
 * client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';
 *
 * [인터셉터 설정]
 * axios.intercepter.response.use(
 *   response => {
 *     return response;
 *   },
 *   error => {
 *     return Promise.reject(error);
 *   }
 * )
 */

const client = axios.create();

client.interceptors.response.use(
    response => response,
    // error => {
    //     if (error.response.status === 403) {
    //         sessionStorage.clear();
    //         window.location.href = '/login';
    //         return Promise.reject(error.response.status);
    //     }
    //     return Promise.reject(error);
    // }
);

export default client;
