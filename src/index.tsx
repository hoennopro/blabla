import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { setUsers } from "./redux/actions/userActions";
import { setProducts } from "./redux/actions/productActions";
import App from "./App";

const initialUsers = [
  {
    id: "1",
    userName: "Nguyễn Văn A",
    gender: "Nam",
    dateBirth: "20/11/2023",
    address: "Thanh Xuân, Hà Nội",
  },
  {
    id: "2",
    userName: "Nguyễn Thị B",
    gender: "Nữ",
    dateBirth: "20/11/2023",
    address: "Cầu Giấy, Hà Nội",
  },
];

const initialProducts = [
  {
    id: "1",
    productName: "Cam sành",
    price: 20000,
    quantity: 10,
  },
  {
    id: "2",
    productName: "Bưởi ba roi",
    price: 50000,
    quantity: 15,
  },
];

store.dispatch(setUsers(initialUsers));
store.dispatch(setProducts(initialProducts));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
