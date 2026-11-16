import { Component, Input, signal } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { NewTaskObject } from './task/task.model';
import { TasksService } from './Tasks.service';

@Component({
  imports: [Task, NewTask],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {
  @Input({ required: true }) username!: string;
  @Input({ required: true }) userId!: string;
  addTaskBtnClicked = signal<boolean>(false);

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onTaskSelect(id: string) {}

  onAddTaskBtnClick() {
    this.addTaskBtnClicked.set(!this.addTaskBtnClicked());
  }

  onCancelBtnClicked() {
    this.addTaskBtnClicked.set(false);
  }
}
