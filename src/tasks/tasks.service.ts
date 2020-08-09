import { Injectable } from '@nestjs/common';

import { v4 as uuidv4 } from 'uuid';

import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  createTask(attributes: { title: string; description: string }) {
    const task: Task = {
      id: uuidv4(),
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
