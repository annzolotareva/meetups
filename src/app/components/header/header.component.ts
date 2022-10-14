import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatTabNavPanel } from '@angular/material/tabs';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  constructor(public authService: AuthService) {}

  admin: boolean = this.authService.isAdmin;
  navLinks = [
    {location:'/meetups', label:'Митапы'},
    { location: '/my-meetups', label:'Мои митапы'},
    { location: '/users', label:'Пользователи'}
  ];

  notAdminNavLinks = [
    {location:'/meetups', label:'Митапы'},
    { location: '/my-meetups', label:'Мои митапы'},
  ]
  
  

  ngOnInit(): void {
    console.log(this.admin)
  }
}
