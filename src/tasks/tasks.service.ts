import { Injectable } from '@nestjs/common';

import { v4 as uuid } from 'uuid';

import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }

  getTaskByID(id: string) {
    return this.tasks.find(task => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto) {
    const task: Task = {
      id: uuid(),
      ...createTaskDto,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }

  deleteTask(id: string) {
    const taskIndex = this.tasks.findIndex(task => task.id === id);

    this.tasks.splice(taskIndex, 1);

    return;
  }
}
