import { useState } from 'react';
import { Task as TaskType } from '../types';
import { Trash2, ChevronDown, ChevronUp, Clock, Tag, Zap } from 'lucide-react';

interface TaskProps {
  task: TaskType;
  onToggle: () => void;
  onDelete: () => void;
  onUpdate: (task: TaskType) => void;
}

export function Task({ task, onToggle, onDelete, onUpdate }: TaskProps) {
  const [expanded, setExpanded] = useState(false);

  const difficultyColors = {
    easy: 'bg-emerald-500/20 text-emerald-500 dark:bg-emerald-500/10 dark:text-emerald-400',
    medium: 'bg-yellow-500/20 text-yellow-600 dark:bg-yellow-500/10 dark:text-yellow-400',
    hard: 'bg-red-500/20 text-red-600 dark:bg-red-500/10 dark:text-red-400',
  };

  // const priorityColors = {
  //   low: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  //   medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  //   high: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  // };

  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 
      hover:shadow-md transition-shadow duration-200 backdrop-blur-sm">
      <div className="p-4">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={onToggle}
            className="w-5 h-5 rounded border-gray-300 dark:border-gray-600 
              text-cyan-600 dark:text-cyan-400 
              focus:ring-cyan-500 dark:focus:ring-cyan-400"
          />
          <div className="flex-1">
            <h3 className={`text-lg font-medium ${
              task.completed 
                ? 'line-through text-gray-500 dark:text-gray-400' 
                : 'text-gray-800 dark:text-gray-100'
            }`}>
              {task.title}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${difficultyColors[task.difficulty]}`}>
                <Zap className="w-3 h-3" />
                {task.difficulty}
              </span>
              {/* <span className={`text-xs px-2 py-1 rounded-full ${priorityColors[task.priority]}`}>
                {task.priority}
              </span> */}
              {task.dueDate && (
                <span className="flex items-center text-xs text-gray-500 dark:text-gray-400 
                  bg-gray-100 dark:bg-gray-700/50 px-2 py-1 rounded-full">
                  <Clock className="w-3 h-3 mr-1" />
                  {new Date(task.dueDate).toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                  })}
                </span>
              )}
              {task.tags.map((tag) => (
                <span key={tag} className="flex items-center text-xs text-gray-500 dark:text-gray-400
                  bg-gray-100 dark:bg-gray-700/50 px-2 py-1 rounded-full">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setExpanded(!expanded)}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              {expanded ? (
                <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              )}
            </button>
            <button
              onClick={onDelete}
              className="p-1 hover:bg-red-100 dark:hover:bg-red-900/30 rounded 
                text-red-600 dark:text-red-400"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {expanded && task.description && (
          <div className="mt-3 pl-8">
            <p className="text-gray-600 dark:text-gray-300">{task.description}</p>
            {task.subtasks.length > 0 && (
              <div className="mt-3 space-y-2">
                {task.subtasks.map((subtask) => (
                  <div key={subtask.id} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={subtask.completed}
                      onChange={() => {
                        const updatedSubtasks = task.subtasks.map((st) =>
                          st.id === subtask.id ? { ...st, completed: !st.completed } : st
                        );
                        onUpdate({ ...task, subtasks: updatedSubtasks });
                      }}
                      className="w-4 h-4 rounded border-gray-300 dark:border-gray-600
                        text-cyan-600 dark:text-cyan-400"
                    />
                    <span className={`${
                      subtask.completed 
                        ? 'line-through text-gray-500 dark:text-gray-400' 
                        : 'text-gray-700 dark:text-gray-200'
                    }`}>
                      {subtask.title}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}