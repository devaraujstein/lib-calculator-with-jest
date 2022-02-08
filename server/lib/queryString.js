export function makeQueryString(queryValues) {
  return Object.entries(queryValues)
    .map(keyValueToString)
    .join('&');
}

export function makeObjectWithQueryString(queryString) {
  return Object.fromEntries(
    queryString.split('&').map(string => {

      let [key, value] = string.split('=');

      if (value && (value.indexOf(',') > -1)) {
        value = value.split(',');
      }

      return [key, value];
    })
  );
}

const keyValueToString = ([key, value]) => {

  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('Please check your params');
  }

  return `${key}=${value}`;
}