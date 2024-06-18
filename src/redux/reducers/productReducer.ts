interface Product {
  id: string;
  productName: string;
  price: number;
  quantity: number;
}

interface ProductState {
  products: Product[];
}

interface Action {
  type: string;
  payload: any;
}

const initialState: ProductState = {
  products: [],
};

const productReducer = (
  state: ProductState = initialState,
  action: Action
): ProductState => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
