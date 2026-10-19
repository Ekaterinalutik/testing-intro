const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test("вПо возрастанию  все products, направление 'asc'", () => {
    const result = sortProductsByPrice(products, 'asc');
    const ids = result.map((item) => item.id);
    expect(ids).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test("по возрастанию все products, направление не передано", () => {
    const result = sortProductsByPrice(products);
    const ids = result.map((item) => item.id);
    expect(ids).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test("по возрастанию товары с ID [1, 3, 4], направление 'asc'", () => {
    const inputIds = [1, 3, 4];
    const targetProducts = products.filter((p) => inputIds.includes(p.id));
    const sorted = sortProductsByPrice(targetProducts, 'asc');
    const ids = sorted.map((item) => item.id);
    expect(ids).toEqual([3, 4, 1]);
  });
  test("по убыванию все products, направление 'desc'", () => {
    const result = sortProductsByPrice(products, 'desc');
    const ids = result.map((item) => item.id);
    expect(ids).toEqual([1, 2, 4, 5, 6, 3]);
  });
  test("по убыванию товары с ID [3, 1, 4], направление 'desc'", () => {
    const inputIds = [3, 1, 4];
    const targetProducts = inputIds.map((id) => products.find((p) => p.id === id));
    const sorted = sortProductsByPrice(targetProducts, 'desc');
    const ids = sorted.map((item) => item.id);
    expect(ids).toEqual([1, 4, 3]);
  });
  test("по убыванию товары с ID [5, 2, 6], направление 'desc'", () => {
    const inputIds = [5, 2, 6];
    const targetProducts = inputIds.map((id) => products.find((p) => p.id === id));
    const sorted = sortProductsByPrice(targetProducts, 'desc');
    const ids = sorted.map((item) => item.id);
    expect(ids).toEqual([2, 5, 6]);
  });
  test("исходный массив не меняется: товары с ID [1, 3, 4], вызов с 'asc'", () => {
    const initialIds = [1, 3, 4];
    const targetProducts = initialIds.map((id) => products.find((p) => p.id === id));
    sortProductsByPrice(targetProducts, 'asc');
    const ids = targetProducts.map((item) => item.id);
    expect(ids).toEqual(initialIds);
  });
  test("исходный массив не меняется: товары с ID [1, 3, 4], вызов с 'desc'", () => {
    const initialIds = [1, 3, 4];
    const targetProducts = initialIds.map((id) => products.find((p) => p.id === id));
    sortProductsByPrice(targetProducts, 'desc');
    const ids = targetProducts.map((item) => item.id);
    expect(ids).toEqual(initialIds);
  });
  test("исходный массив не меняется: все products, направление не передано", () => {
    const initialIds = products.map((item) => item.id);
    const targetProducts = [...products];
    sortProductsByPrice(targetProducts);
    const ids = targetProducts.map((item) => item.id);
    expect(ids).toEqual(initialIds);
  });
});
