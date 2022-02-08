const fetchItem = async (item) => {
  const getUrl = `https://api.mercadolibre.com/items/${item}`;

  try {
    const response = await fetch(getUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
