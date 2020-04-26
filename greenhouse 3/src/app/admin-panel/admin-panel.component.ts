import { Component, OnInit } from '@angular/core';
import { FlowersService } from '../flowers.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  public flowers = []
  editable: boolean = false
  flower = {
    id: 0,
    name: '',
    description: '',
    image: '',
    price: '',
    light:'',
    temp:'',
    humidity: '',
    watering:'',
    fertilizer:'',
    transplantatio:''
  }
  constructor(private flowersService: FlowersService) { }

  ngOnInit(): void {
    this.flowersService.getFlowers().subscribe(
      data => {
        this.flowers = data
      }
    )
  }

  onCreate(): void {
    this.flowersService.create(this.flower).subscribe()
  }

  onDelete(id){
    this.flowersService.delete(id).subscribe()
  }

  onEditOpen(id) {
    this.editable = true
    this.flowersService.getFlower(id).subscribe(
      data => {
        this.flower.id = data.id
        this.flower.name = data.name,
        this.flower.description = data.description,
        this.flower.image = data.image,
        this.flower.price = data.price,
        this.flower.light =data.light,
        this.flower.temp =data.temp,
        this.flower.humidity = data.humidity,
        this.flower.watering =data.watering,
        this.flower.fertilizer =data.fertilizer,
        this.flower.transplantatio =data.transplantatio
      }
    )
  }

  onEdit() {
    this.flowersService.edit(this.flower).subscribe()
    console.log(this.flower.id)
    
    this.flower.name = '',
    this.flower.description = '',
    this.flower.image = '',
    this.flower.price = '',
    this.flower.light ='',
    this.flower.temp ='',
    this.flower.humidity = '',
    this.flower.watering ='',
    this.flower.fertilizer ='',
    this.flower.transplantatio =''

    this.editable = false
  }
}
