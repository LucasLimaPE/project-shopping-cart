require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Deve ser uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Com o argumento "computador", a função fetch deve ser chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })
  it('Com o argumento "computador", a função fetch deve ser chamada com o endpoint correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');

    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
  it('Deve retornar um objeto com as propriedades esperadas', async () => {
    const response = await fetchProducts('computador');

    expect(response).toEqual(computadorSearch);
  });
  it('Quando chamada sem argumento, deve retornar um erro com a mensagem esperada', async () => {
    const response = await fetchProducts();

    expect(response).toEqual(new Error('You must provide an url'));
  });
});