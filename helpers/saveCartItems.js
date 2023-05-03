const saveCartItems = (param) => {
  const saved = localStorage.getItem('cartItems');
  if (typeof param === 'object') {
    return localStorage.setItem('cartItems', JSON.stringify(param));
  }
  if (saved === null) {
    return localStorage
      .setItem('cartItems', JSON.stringify([param]));
  }
  const savedArray = JSON.parse(localStorage.getItem('cartItems'));
  savedArray.push(param);
  return localStorage.setItem('cartItems', JSON.stringify(savedArray));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
