import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { User } from "src/app/models/User";
import { UserServices } from "src/app/services/UserServices";

@Component({
    selector: 'app-edit',
    templateUrl: './fscomponent.html',
    styleUrls: ['./fscomponent.css'],
})
export class EditUserComponent implements OnInit {
    @Input() user?: User;
    @Output() userUpdated = new EventEmitter<User[]>();

    constructor(private userServices: UserServices) { }

    ngOnInit(): void { }

    updateUser(user: User) {
        this.userServices.updateUser(user).subscribe((users: User[]) => this.userUpdated.emit(users))
    }
    deleteUser(user: User) {
        this.userServices.deleteUser(user).subscribe((users: User[]) => this.userUpdated.emit(users))
    }
    createUser(user: User) {
        this.userServices.createUser(user).subscribe((users: User[]) => this.userUpdated.emit(users))
    }
}