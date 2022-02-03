module.exports.makeQueryString = (queryValues) => {
  return Object.entries(queryValues).map(queryValue => {
    return `${queryValue[0]}=${queryValue[1]}`;
  }).join('&');
}