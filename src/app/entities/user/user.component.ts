export interface Roles {
  id: number;
  name: string;
}
export interface IUser {
  id: number;
  email: string;
  password: string; 
  fio: string;
  roles: Array<Roles>;
}