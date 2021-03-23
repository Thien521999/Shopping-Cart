//1.Setup userSlice
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import Storekeys from "constants/storage-key";

// First, create the thunk
export const register = createAsyncThunk("user/register", async (payload) => {
  //neu muon dispatch 1 action khac dung userAPi,còn ko thì bỏ đi,
  //payload : là tham so mà thang user nó truyền vào khi nó goi thang register
  //call API to register
  const data = await userApi.register(payload); //payload:thong tin nhap tren form
  //save data to local storage
  localStorage.setItem(Storekeys.TOKEN, data.jwt); //token
  localStorage.setItem(Storekeys.USER, JSON.stringify(data.user)); // do user là 1 object nen phai dùng JSON.stringify(data.user)
  //(nhớ)return về  user data
  return data.user;
});

export const login = createAsyncThunk("user/login", async (payload) => {
  //neu muon dispatch 1 action khac dung userAPi,còn ko thì bỏ đi,
  //payload : là tham so mà thang user nó truyền vào khi nó goi thang login
  //call API to login
  const data = await userApi.login(payload); //payload:thong tin nhap tren form
  //save data to local storage
  localStorage.setItem(Storekeys.TOKEN, data.jwt); //token
  localStorage.setItem(Storekeys.USER, JSON.stringify(data.user)); // do user là 1 object nen phai dùng JSON.stringify(data.user)
  //(nhớ)return về  user data
  return data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    //Khởi tạo redux state từ localStorage
    current: JSON.parse(localStorage.getItem(Storekeys.USER)) || {}, //thong tin cua thang login user
    settings: {},
  }, //gia tri khoi tao
  reducers: {
    //Asynchronous actions
    logout(state) {
      //clear local storage
      localStorage.removeItem(Storekeys.TOKEN);
      localStorage.removeItem(Storekeys.USER);
      //cap nhat state ve object rong
      state.current = {};
    },
  },
  //Khi thunk này(regiter,login ở trên) thành công thì ta cần cập nhật dữ liệu vào trong redux state của mình ,ta sử dụng thằng extraReducers
  extraReducers: {
    //Async action
    [register.fulfilled]: (state, action) => {
      //[register.fulfilled]:thực chất là 1 chuỗi có dang như này( 'user/register/fullfilled' )
      state.current = action.payload; //action.payload : chính là chỗ return trên register ở trên(dòng 16)
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;

export default reducer; //default export
