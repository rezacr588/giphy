export interface todoObject {
  id: number;
  title: string;
  status: boolean;
}
export interface State {
  name: string;
  lastName: string;
  email: string;
  password: string;
  melliCode: number;
  profileImage: string;
  authenticated: boolean;
  todos: todoObject[];
}
