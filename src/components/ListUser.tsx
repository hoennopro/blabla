import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../redux/actions/userActions";

const ListUser: React.FC = () => {
  const users = useSelector((state: any) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = (id: string) => {
    // Handle edit functionality
    // This can be implemented by opening a modal or navigating to an edit page
    console.log("Edit user with id:", id);
  };

  return (
    <div>
      <h1>Danh sách người dùng</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.userName}</td>
              <td>{user.gender}</td>
              <td>{user.dateBirth}</td>
              <td>{user.address}</td>
              <td>
                <button onClick={() => handleEdit(user.id)}>Sửa</button>
                <button onClick={() => handleDelete(user.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;
