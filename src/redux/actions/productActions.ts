interface Product {
  id: string;
  productName: string;
  price: number;
  quantity: number;
}

export const setProducts = (products: Product[]) => ({
  type: "SET_PRODUCTS",
  payload: products,
});

export const updateProduct = (product: Product) => ({
  type: "UPDATE_PRODUCT",
  payload: product,
});

export const deleteProduct = (id: string) => ({
  type: "DELETE_PRODUCT",
  payload: id,
});
