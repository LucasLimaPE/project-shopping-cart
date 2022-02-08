require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('Deve ser uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('Com o argumento "MLB1615760527", a função fetch deve ser chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  })
  it('Com o argumento "MLB1615760527", a função fetch deve ser chamada com o endpoint correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');

    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
  it('Deve retornar um objeto com as propriedades esperadas', async () => {
    const response = await fetchItem('MLB1615760527');

    expect(response).toEqual(item);
  });
  it('Quando chamada sem argumento, deve retornar um erro com a mensagem esperada', async () => {
    const response = await fetchItem();

    expect(response).toEqual(new Error('You must provide an url'));
  });
});
