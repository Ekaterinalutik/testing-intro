function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity = 1) { 
  if (quantity <= 0 || quantity > product.stock) {
     throw new RangeError('Недопустимое количество товара');  
}
const existingItemIndex = cart.findIndex((item) => item.id === product.id);

   if (existingItemIndex !== -1) {
     const newQuantity = cart[existingItemIndex].quantity + quantity;
   if (newQuantity > product.stock) {
     throw new RangeError('Превышен остаток на складе');
     }
     const updatedCart = [...cart];
     updatedCart[existingItemIndex] = {
       ...updatedCart[existingItemIndex],
       quantity: newQuantity,
     };
     return updatedCart;
   }

   return [...cart, { ...product, quantity }];
}
function changeQuantity(cart, productId, quantity) {
  if (quantity <= 0) {
   throw new RangeError('Недопустимое количество');
  }

  const itemIndex = cart.findIndex((item) => item.id === productId);
  if (itemIndex === -1) {
    return cart;
  }

if (quantity > cart[itemIndex].stock) {
   throw new RangeError('Превышен остаток на складе');
}

   const updatedCart = [...cart];
   updatedCart[itemIndex] = {
   ...updatedCart[itemIndex],
   quantity,
   };
 return updatedCart;
}

function removeFromCart(cart,productId) {
  return cart.filter((item) => item.id !== productId);
}
function calculateCartSubtotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
function calculateOrderTotal(cart, promoCode = '') {
  const subtotal = calculateCartSubtotal(cart);
  let discount = 0;

  if (promoCode === 'SAVE10' && subtotal >= 20000) {
    discount = Math.round(subtotal * 0.1);
  }
const delivery = subtotal >= 50000 ? 0 : 30000;
const total = subtotal - discount + delivery;
return {
  subtotal,
  discount,
  delivery,
  total,
};}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
