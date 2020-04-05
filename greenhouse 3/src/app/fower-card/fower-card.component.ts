import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fower-card',
  templateUrl: './fower-card.component.html',
  styleUrls: ['./fower-card.component.css']
})
export class FowerCardComponent implements OnInit {
  @Input() flower
  constructor() { }

  ngOnInit(): void {
  }

}
