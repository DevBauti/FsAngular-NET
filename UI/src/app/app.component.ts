import { Component } from '@angular/core';
import { User } from "./models/User";
import { UserServices } from "./services/UserServices";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UI';
  users: User[] = []
  userToEdit?: User;

  constructor(private userServices: UserServices) {}

  ngOnInit(): void {
    this.userServices.getUser().subscribe((result: User[])=>(this.users = result));
  }
  updateUserList(users: User[]){
    this.users = users
  }
  initNewUser(){
    this.userToEdit = new User();
  }
  editUser(user: User){
    this.userToEdit = user
  }
}
