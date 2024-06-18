import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../redux/actions/productActions";

const ListProduct: React.FC = () => {
  const products = useSelector((state: any) => state.products);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteProduct(id));
  };

  const handleEdit = (id: string) => {
    // Handle edit functionality
    console.log("Edit product with id:", id);
  };

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng (kg)</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: any) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.price} đ</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => handleEdit(product.id)}>Sửa</button>
                <button onClick={() => handleDelete(product.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProduct;
