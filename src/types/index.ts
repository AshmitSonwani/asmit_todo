export type TaskDifficulty = 'easy' | 'medium' | 'hard';

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high';
  difficulty: TaskDifficulty;
  dueDate?: Date;
  completed: boolean;
  createdAt: Date;
  subtasks: SubTask[];
  points: number;
  tags: string[];
}

export interface SubTask {
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskAnalytics {
  completedTasks: number;
  totalPoints: number;
  productiveHours: string[];
  completionRate: number;
}