import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'greenhouse';
  logged = false

  ngOnInit() {
    let isLogged = localStorage.getItem('token')
    if(isLogged) {
      this.logged = true
    } 
  }

  onLogout() {
    localStorage.clear()
    this.logged = false
  }
}
