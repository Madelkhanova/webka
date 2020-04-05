import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlowersService } from '../flowers.service';

@Component({
  selector: 'app-flower-details',
  templateUrl: './flower-details.component.html',
  styleUrls: ['./flower-details.component.css']
})
export class FlowerDetailsComponent implements OnInit {
  public flower
  constructor(private route: ActivatedRoute, private flowersService: FlowersService) { }
  public id = this.route.snapshot.paramMap.get('id')
  ngOnInit(): void {
    this.flowersService.getFlowers()
      .subscribe(data => {
        this.flower = data.find(o => o.id == this.id)
      })
  }

}
