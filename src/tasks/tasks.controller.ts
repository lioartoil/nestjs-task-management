import { Controller, Get, Post, Body } from '@nestjs/common';

import { CreateTaskDto } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() body: CreateTaskDto) {
    console.log({ body });
    return this.tasksService.createTask(body);
  }
}
