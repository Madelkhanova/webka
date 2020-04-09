import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() login = true
  model = {
    email: '',
    password: '',
    password2: ''
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.model)
    if(this.login==true) this.userService.login(this.model)
    else this.userService.signup(this.model)
  }
}
