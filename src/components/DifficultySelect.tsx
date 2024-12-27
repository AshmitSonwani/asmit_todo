// import React from 'react';
import { Zap } from 'lucide-react';
import { TaskDifficulty } from '../types';

interface DifficultySelectProps {
  difficulty: TaskDifficulty;
  onChange: (difficulty: TaskDifficulty) => void;
}

export function DifficultySelect({ difficulty, onChange }: DifficultySelectProps) {
  const difficulties: { value: TaskDifficulty; color: string }[] = [
    { value: 'easy', color: 'bg-emerald-500 dark:bg-emerald-400' },
    { value: 'medium', color: 'bg-yellow-500 dark:bg-yellow-400' },
    { value: 'hard', color: 'bg-red-500 dark:bg-red-400' },
  ];

  return (
    <div className="flex gap-2">
      {difficulties.map(({ value, color }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium 
            ${difficulty === value ? color + ' text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'} 
            transition-colors duration-200`}
        >
          <Zap className={`w-3 h-3 ${difficulty === value ? 'animate-pulse' : ''}`} />
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </button>
      ))}
    </div>
  );
}