import { createSelector } from "@reduxjs/toolkit";

const cartItemSelector = (state) => state.cart.cartItems;

//Count number of products in cart
export const cartItemCountSelector = createSelector(cartItemSelector, (cartItems) =>
  cartItems.reduce((count, item) => count + item.quantity, 0)
);

//Calculate total of cart
export const cartTotalSelector = createSelector(cartItemSelector, (cartItems) =>
  cartItems.reduce((total, item) => total + item.product.salePrice * item.quantity, 0)
);

//NOte: Mổi khi gap Th state co the tinh toan duoc,phu thuoc vao state khac thi co the nghi den createSelector
//no se giup minh tinh toan du lieu,du lieu nay phu thuoc vao du lieu  khac
//cartItemSelector ko thay doi thi thang sat ben cung ko tinh toan lai
