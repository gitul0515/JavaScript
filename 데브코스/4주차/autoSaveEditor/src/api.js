export const API_END_POINT = 'https://kdt.roto.codes';

export const request = async function(url, options = {}) {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (res.ok) {
      return await res.json();
    }
    throw new error('request error');
  } catch (error) {
    alert(error.message);
  }
};
