import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Users } from './users/users';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  imports: [Header, Users, Tasks],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('first-angular-app');
  selectedUserId = signal('');
  users = DUMMY_USERS;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId());
  }

  onUserSelect(id: string) {
    this.selectedUserId.set(id);
  }
}
