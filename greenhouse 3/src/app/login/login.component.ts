import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() login = true
  model = {
    username: '',
    password: '',
    password2: ''
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.userService.login(this.model).subscribe(
      res => {
        localStorage.setItem('token', res.token)
        localStorage.setItem('username', this.model.username)

        this.router.navigate(['/home-page'])
      }
    )
  }

  onRegister() {
    this.userService.signup(this.model).subscribe()
  }
}
