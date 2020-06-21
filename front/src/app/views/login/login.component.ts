import { UserDTO } from './../../models/dto/user.dto';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserDTO = {
    username: '',
    password: ''
  }
  hide = true;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    
    this.authService.login(this.user)
    this.user.username = ''
    this.user.password = ''
  }

}
