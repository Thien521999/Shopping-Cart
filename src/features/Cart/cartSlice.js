//Setup counterSlice
const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showMiniCart: false,
    cartItems: JSON.parse(localStorage.getItem("products")) || [],
  }, //gia tri khoi tao
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },
    hideMiniCart(state) {
      state.showMiniCart = false;
    },
    addToCart(state, action) {
      const newItem = action.payload; //newItem là  {id:1,product:{},quantity:1}

      const index = state.cartItems.findIndex((x) => x.id === newItem.id);
      if (index >= 0) {
        console.log(" >= 0");
        //increate quantity
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        console.log(" < 0 ");
        //add to cart
        const item = state.cartItems.push(newItem);
        console.log(item);
      }
      localStorage.setItem("products", JSON.stringify(state.cartItems));
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      console.log(typeof state.cartItems);

      //Tim vi tri
      const index = state.cartItems.findIndex((x) => x.id === id);
      if (index >= 0) {
        //neu ton tai
        state.cartItems[index].quantity = quantity;
      }
    },
    removeFromCart(state, action) {
      const idNeedToRemove = action.payload;
      //filter tra ve 1 mang moi, mang moi nay bo truc tiep vao cartItem
      // state.cartItems = state.cartItems.filter((x) => x.id !== idNeedToRemove);
      state.cartItems.splice(idNeedToRemove, 1);

      localStorage.setItem('products', JSON.stringify(state.cartItems));
    },
  },
});

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, addToCart, setQuantity, removeFromCart } = actions; //name eport
export default reducer; //default export
