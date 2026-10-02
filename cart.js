const CART_KEY = 'paginaviva_cart';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(id, qty) {
  id = String(id);
  qty = qty || 1;
  const cart = getCart();
  const item = cart.find((i) => i.id === id);
  if (item) {
    item.qty += qty;
  } else {
    cart.push({ id: id, qty: qty });
  }
  saveCart(cart);
}

function removeFromCart(id) {
  id = String(id);
  saveCart(getCart().filter((i) => i.id !== id));
}

function clearCart() {
  saveCart([]);
}

function cartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function cartTotal() {
  return getCart().reduce((sum, i) => {
    const book = BOOKS[i.id];
    return sum + (book ? book.price * i.qty : 0);
  }, 0);
}

function updateCartBadge() {
  const badge = document.querySelector('.badge-cart');
  if (badge) badge.textContent = cartCount();
}

document.addEventListener('DOMContentLoaded', updateCartBadge);
