import React from "react";
import { useSelector } from "react-redux";

const Profile: React.FC = () => {
  const user = useSelector((state: any) => state.user);

  return (
    <div>
      <h1>Thông tin cá nhân</h1>
      <p>Id: {user.id}</p>
      <p>Họ và tên: {user.userName}</p>
      <p>Giới tính: {user.gender}</p>
      <p>Ngày sinh: {user.dateBirth}</p>
      <p>Địa chỉ: {user.address}</p>
    </div>
  );
};

export default Profile;
