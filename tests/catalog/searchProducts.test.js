const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("точный запрос 'Наушники' возвращает товар с ID [1]", () => {
    const result = searchProducts(products, 'Наушники');
    const ids = result.map((item) => item.id);
    expect(ids).toEqual([1]);
  });
  test(" точный запрос 'Чистый код' возвращает товар с ID  [6]", () => {
    const result = searchProducts(products, 'Чистый код');
    const ids = result.map((item) => item.id);
    expect(ids).toEqual([6]);
  });
  test("точный запрос 'Настольная лампа' возвращает товар с ID [4]", () => {
    const result = searchProducts(products, 'Настольная лампа');
    const ids = result.map((item) => item.id);
    expect(ids).toEqual([4]);
  });
  test("'поиск не зависит от регистра 'javascript' возвращает товар с ID  [3]", () => {
    const result = searchProducts(products, 'javascript');
    const ids = result.map((item) => item.id);
    expect(ids).toEqual([3]);
  });
  test("поиск не зависит от регистра 'чехол' возвращает товар с ID  [5]", () => {
    const result = searchProducts(products, 'чехол');
    const ids = result.map((item) => item.id);
    expect(ids).toEqual([5]);
  });
  test("наушники' возвращает товар с ID [1]", () => {
    const result = searchProducts(products, 'наушники');
    const ids = result.map((item) => item.id);
    expect(ids).toEqual([1]);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = searchProducts(products, '');
    const ids = result.map((item) => item.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("строка из пробелов возвращает товары с ID  [1, 2, 3, 4, 5, 6]", () => {
    const result = searchProducts(products, '   ');
    const ids = result.map((item) => item.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("\\t\\n' возвращает товары с ID  [1, 2, 3, 4, 5, 6]", () => {
    const result = searchProducts(products, '\t\n');
    const ids = result.map((item) => item.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
