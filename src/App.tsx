import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ListUser from "./components/ListUser";
import Profile from "./components/Profile";
import ListProduct from "./components/ListProduct";
import Counter from "./components/Counter";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Profile />
        <ListUser />
        <ListProduct />
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
