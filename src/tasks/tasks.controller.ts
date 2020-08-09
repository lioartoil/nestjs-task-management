import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTaskByID(@Param('id') id: string) {
    return this.tasksService.getTaskByID(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteTask(@Param('id') id: string) {
    this.tasksService.deleteTask(id);
  }

  @Patch(':id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ) {
    return this.tasksService.updateTaskStatus({ id, status });
  }
}
