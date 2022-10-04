import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  admin: boolean = true;
  token!: string;

  constructor(public authService: AuthService) { 
    authService.getUser(this.token).subscribe((arg: string) => {
      this.token = arg;
  })
  }

  ngOnInit(): void {
  }
}
