import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlowersService } from '../flowers.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-flower-details',
  templateUrl: './flower-details.component.html',
  styleUrls: ['./flower-details.component.css']
})
export class FlowerDetailsComponent implements OnInit {
  public flower
  public comments = []
  constructor(private route: ActivatedRoute, private flowersService: FlowersService, private userService: UserService) { }
  public id = this.route.snapshot.paramMap.get('id')

  userData = {
    name: '',
    phone: ''
  }

  commentData = {
    name: '',
    text: ''
  }

  ngOnInit(): void {
    this.flowersService.getFlower(this.id)
      .subscribe(data => {
        this.flower = data
        console.log(this.flower)
      })
    
    this.flowersService.getCommnet().subscribe(comments => {
      this.comments = comments.filter(o => o.flower.id == this.id)
    })
  }

  onOrder(): void {
    this.userService.order(this.userData, this.flower.id).subscribe()
  }

  onComment() {
    // console.log(this.commentData)
    this.flowersService.setComment(this.commentData, this.flower.id).subscribe()
  }
}
