import axios from 'axios';
const REACT_APP_STRAPI_APP_KEY =
  'b51947ce4364bb4ee1d0673d69d7c1bf2d0a5d5deff29ce290761339991c451997fd32d44d656db47289728f59677bec35270d88115e95f1aa7db1a1d0cc7bedc6ad7ac7b17a7693d1aa5995f5b4a37f2c618ae77ae938d14cfa71b66bde8f942b7a40a215be7f136fd1a6974207e25a8f864c8d94d948227afc262d6d966d17';
export const REACT_DEV_URL = 'http://localhost:1337';
const params = {
  headers: {
    Authorization: 'bearer ' + REACT_APP_STRAPI_APP_KEY,
  },
};

export const REACT_APP_STRAP_Publishable_KEY =
  'pk_test_51NcBR9G35bFXRa7A4jZsUyW3wB3ZaYnHeCSJT7nqYVpUn6r87XH8NCcElkGKP7SxRRxr7rPbGukRnyd3iO19Wb3N00TlqHFc0F';
export const REACT_APP_STRAP_SECRET_KEY =
  'sk_test_51NcBR9G35bFXRa7An0dOycCtCcHogWcEz9khsXfpDNUPNr21cXj8O3p0n3PGhvASHeJUWeDbIxwDEEXApcqc65eh00DyBtF6DF';

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(REACT_DEV_URL + url, params);
    return data;
  } catch (error) {
    return error;
  }
};

export const makePaymentRequest = axios.create({
  baseURL: REACT_DEV_URL,
  headers: {
    Authorization: 'bearer ' + REACT_APP_STRAPI_APP_KEY,
  },
});
