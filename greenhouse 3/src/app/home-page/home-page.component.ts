import { Component, OnInit } from '@angular/core';
import { FlowersService } from '../flowers.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public flowers = []
  constructor(private folwersService: FlowersService) { }

  ngOnInit(): void {
    this.folwersService.getFlowers()
      .subscribe(data => {
        this.flowers = data
      })
  }

}
