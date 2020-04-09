import { Component, OnInit } from '@angular/core';
import { FlowersService } from '../flowers.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  flower = {
    name: '',
    description: '',
    image: '',
    price: '',
    light:'',
    temperature:'',
    humidity: '',
    watering:'',
    fertilizer:'',
    transplantation:''
  }
  constructor(private flowersService: FlowersService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.flowersService.create(this.flower)
  }
}
