import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Users } from './users/users';
import { DUMMY_USERS } from './dummy-users';

@Component({
  imports: [Header, Users],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS;

  onUserSelect(id: string) {
    console.log(id);
  }
}
