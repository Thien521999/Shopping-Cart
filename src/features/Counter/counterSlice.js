//Setup counterSlice 
const { createSlice } = require ('@reduxjs/toolkit')

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0, //gia tri khoi tao
    reducers: {
        increase(state) {
            return state + 1;
        },

        decreate(state) {
            return state - 1 ;
        },
    },
});

const {actions, reducer} = counterSlice;
export const { increase, decreate} = actions; //named export
export default reducer;//default export
