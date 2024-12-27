// import React from 'react';
import { Task as TaskType } from '../types';
import { Task } from './Task';
import { Calendar, ListTodo, BarChart2 } from 'lucide-react';

interface TaskListProps {
  tasks: TaskType[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onUpdateTask: (task: TaskType) => void;
}

export function TaskList({ tasks, onToggleTask, onDeleteTask, onUpdateTask }: TaskListProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 
          dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
          My Tasks
        </h2>
        <div className="flex gap-2">
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 
            text-gray-600 dark:text-gray-400">
            <ListTodo className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 
            text-gray-600 dark:text-gray-400">
            <Calendar className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 
            text-gray-600 dark:text-gray-400">
            <BarChart2 className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="space-y-3">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggle={() => onToggleTask(task.id)}
            onDelete={() => onDeleteTask(task.id)}
            onUpdate={onUpdateTask}
          />
        ))}
      </div>
    </div>
  );
}