export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = 'oepn',
  IN_PROGRESS = 'in-progress',
  DONE = 'done',
}
