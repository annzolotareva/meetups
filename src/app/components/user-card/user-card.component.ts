import { Component, OnInit, Input } from '@angular/core';
import { IUser } from "../../entities/user/user.component";
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
ngOnInit(): void {
  }
  @Input()
  newUserCard!: IUser;

  constructor(public usersService: UsersService) { }
  // delete(id: number) {
  //   this.usersService.delete(id);
  // }
}
