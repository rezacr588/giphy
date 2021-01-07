import { State, todoObject } from "../Interfaces/State.interface";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};
export enum Types {
  StoreLogin = "STORE_LOGIN",
  AddTodo = "ADD_TODO",
  RemoveTodo = "REMOVE_TODO",
  ToggleStatus = "TOGGLE_STATUS",
  Logout = "LOGOUT",
  AditionalInfo = "ADITIONAL_INFO",
}
type ActionsPayload = {
  [Types.StoreLogin]: {
    email: string;
    password: string;
  };
  [Types.AddTodo]: string;
  [Types.RemoveTodo]: number;
  [Types.ToggleStatus]: number;
  [Types.Logout]: any;
  [Types.AditionalInfo]: {
    name: string;
    lastName: string;
    melliCode: number;
    profileImage: string;
  };
};
export type Actions = ActionMap<ActionsPayload>[keyof ActionMap<ActionsPayload>];
const MainReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case Types.StoreLogin: {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        authenticated: true,
      };
    }
    case Types.Logout: {
      return {
        ...state,
        authenticated: false,
      };
    }
    case Types.AddTodo: {
      const todo: todoObject = {
        id: state.todos.length + 1,
        title: action.payload,
        status: false,
      };
      return {
        ...state,
        todos: [...state.todos, todo],
      };
    }
    case Types.RemoveTodo: {
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };
    }
    case Types.ToggleStatus: {
      const newTodos = [...state.todos];
      const todoIndex = newTodos.findIndex((t) => t.id === action.payload);
      let newTodo = {
        ...newTodos[todoIndex],
        status: !newTodos[todoIndex].status,
      };
      newTodos[todoIndex] = newTodo;
      return {
        ...state,
        todos: newTodos,
      };
    }
    case Types.AditionalInfo: {
      return {
        ...state,
        name: action.payload.name,
        lastName: action.payload.lastName,
        melliCode: action.payload.melliCode,
        profileImage: action.payload.profileImage,
      };
    }
    default:
      return state;
  }
};
export default MainReducer;
