const API_END_POINT = 'https://kdt-frontend.cat-api.programmers.co.kr';
const API_ERROR_MESSAGE = 'API Call Fail';

export const request = async (url) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`);
    if (!res.ok) {
      throw new Error(API_ERROR_MESSAGE);
    }
    return await res.json();
  } catch (e) {
    alert(e.message);
  }
};
