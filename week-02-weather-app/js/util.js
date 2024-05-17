/**
 * Returns JSON data from the url
 * @param {string} url - the url for the endpoint
 * @returns The JSON data from the endpoint
 */
export const getJSON = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
