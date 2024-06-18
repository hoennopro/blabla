interface User {
  id: string;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
}

interface UserState {
  users: User[];
}

interface Action {
  type: string;
  payload: any;
}

const initialState: UserState = {
  users: [],
};

const userReducer = (
  state: UserState = initialState,
  action: Action
): UserState => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
