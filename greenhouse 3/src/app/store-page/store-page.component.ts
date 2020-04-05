import { Component, OnInit } from '@angular/core';
import { FlowersService } from '../flowers.service';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit {
  public popular = []
  public home = []
  public season = []
  constructor(private flowersService: FlowersService) { }

  ngOnInit(): void {
    this.flowersService.getFlowers()
      .subscribe(data => {
        this.popular = data
        this.home = data.slice(0, 3)
        this.season = this.shuffle(data)
      })
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

}
