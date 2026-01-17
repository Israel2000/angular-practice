import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  isNewUser: boolean = true;
  userObj: User = new User();

  changeView() {
    this.isNewUser = !this.isNewUser;
  }
}


class User {
  constructor(
    public userId: number = 0,
    public fName: string = '',
    public lName: string = '',
    public uName: string = '',
    public city: string = '',
    public state: string = '',
    public zipCode: string = '',
    public isAgree: boolean = false
  ) {}
}