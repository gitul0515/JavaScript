export const parse = function(queryString) {
  // '?selectedUser=roto&position=bassist'
  return queryString.split('&').reduce((acc, keyAndValue) => {
    const [ key, value ] = keyAndValue.split('=');
    if (key && value) {
      acc[key] = value;
    }
    return acc;
  }, {});
}