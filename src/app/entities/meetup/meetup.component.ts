import { IUser } from "../user/user.component";

export interface IMeetup {
  id: number;
  name: string;
  description: string; 
  location: string;
  target_audience: string;
  need_to_know: string;
  will_happen: string;
  reason_to_come: string;
  time: Date;
  duration: number;
  createdBy: number;
  owner: IUser;
  users: Array<IUser>;

}
