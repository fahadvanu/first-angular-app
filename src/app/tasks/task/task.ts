import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type TaskObject } from './task.model';
import { Card } from '../../shared/card/card';
import { TasksService } from '../Tasks.service';
import { DatePipe } from '@angular/common';

@Component({
  imports: [Card, DatePipe],
  selector: 'app-task',
  styleUrl: './task.css',
  templateUrl: './task.html',
})
export class Task {
  @Input({ required: true }) task!: TaskObject;

  private tasksService = inject(TasksService);

  onSelectTask() {
    this.tasksService.deleteTask(this.task.id);
  }
}
