import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NewTaskObject } from '../task/task.model';
import { TasksService } from '../Tasks.service';

@Component({
  imports: [FormsModule],
  selector: 'app-new-task',
  styleUrl: './new-task.css',
  templateUrl: './new-task.html',
})
export class NewTask {
  @Input({ required: true }) userId!: string;

  @Output() cancelClicked = new EventEmitter();
  taskTitle = '';
  taskSummary = '';
  taskDueDate = '';

  private tasksService = inject(TasksService);

  onCancelClick() {
    this.cancelClicked.emit();
  }

  onSubmitClick() {
    this.tasksService.addTask(
      {
        title: this.taskTitle,
        summary: this.taskSummary,
        dueDate: this.taskDueDate,
      },
      this.userId,
    );

    this.cancelClicked.emit();
  }
}
