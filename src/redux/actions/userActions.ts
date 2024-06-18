interface User {
  id: string;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
}

export const setUsers = (users: User[]) => ({
  type: "SET_USERS",
  payload: users,
});

export const updateUser = (user: User) => ({
  type: "UPDATE_USER",
  payload: user,
});

export const deleteUser = (id: string) => ({
  type: "DELETE_USER",
  payload: id,
});
