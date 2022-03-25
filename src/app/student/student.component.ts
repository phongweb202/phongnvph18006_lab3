import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

type User = {
  id: number,
  name: string,
  age: number,
  phoneNumber: string,
  email: string,
  avatar: string
};

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  users: User[] = [];
  constructor(private us: UserService) { }

  ngOnInit(): void {
    this.onGetList();
  }
  onGetList() {
    this.us.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  remove(id: any) {
    const confirm = window.confirm("ban co chac muon xoa");
    if (confirm) {
      this.us.removeUser(id).subscribe(data => {
        this.onGetList();
      })
    }

  }
}
