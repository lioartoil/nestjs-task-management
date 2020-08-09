import { Injectable } from '@nestjs/common';

import { v4 as uuid } from 'uuid';

import { Task, TaskStatus, CreateTaskDto } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  createTask(attributes: CreateTaskDto) {
    const task: Task = {
      id: uuid(),
      status: TaskStatus.OPEN,
      ...attributes,
    };

    this.tasks.push(task);

    return task;
  }

  getAllTasks() {
    return this.tasks;
  }
}
