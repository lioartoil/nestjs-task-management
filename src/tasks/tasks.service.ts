import { Injectable } from '@nestjs/common';

import { v4 as uuid } from 'uuid';

import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }

  getTasksWithFilters({ status, search }: GetTasksFilterDto) {
    const tasks = this.getAllTasks().filter(
      ({ title, description, status: _status }) => {
        return (
          (status ? _status === status : true) &&
          (search
            ? title.includes(search) || description.includes(search)
            : true)
        );
      },
    );

    return tasks;
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
  }

  updateTaskStatus({ id, status }: UpdateTaskStatusDto) {
    const task = this.getTaskByID(id);
    task.status = status;

    return { id, status };
  }
}
