import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  id:any;
  constructor(private us:UserService,private ActiveRouter:ActivatedRoute,private route :Router) { }
  userUpdate:any;
  ngOnInit(): void {
    this.id = this.ActiveRouter.snapshot.params['id'];
    if(this.id){
      this.us.getUser(this.id).subscribe(data => {
        this.userUpdate = data;
        console.log(this.userUpdate);
      });
    }
  }
  onSubmit(data:any){
    data.avatar = `https://thuthuatnhanh.com/wp-content/uploads/2019/07/anh-girl-xinh-facebook-tuyet-dep-387x580.jpg`;
    if(this.id){
      this.us.updateUser(this.id,data).subscribe(data => {
        this.route.navigate(['student']);
      });
    }else{
      this.us.createUser(data).subscribe(data => {
        this.route.navigate(['student']);
      });
    }
  }
}
