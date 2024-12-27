import React, { useState } from 'react';
import { Plus, Mic } from 'lucide-react';
import { DifficultySelect } from './DifficultySelect';
import { DateTimeInput } from './DateTimeInput';
import { TaskDifficulty } from '../types';

interface TaskInputProps {
  onAddTask: (title: string, difficulty: TaskDifficulty, dueDate?: Date) => void;
}

export function TaskInput({ onAddTask }: TaskInputProps) {
  const [input, setInput] = useState('');
  const [difficulty, setDifficulty] = useState<TaskDifficulty>('medium');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const dueDate = date && time ? new Date(`${date}T${time}`) : undefined;
      onAddTask(input, difficulty, dueDate);
      setInput('');
      setDate('');
      setTime('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mb-6 space-y-4">
      <div className="relative flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task... or try voice input"
          className="w-full px-4 py-3 rounded-lg border 
            dark:bg-gray-800 dark:border-gray-700 dark:text-white
            border-gray-200 bg-white
            focus:border-cyan-500 dark:focus:border-cyan-400 
            focus:ring-2 focus:ring-cyan-200 dark:focus:ring-cyan-800 
            transition-all duration-200"
        />
        <button
          type="submit"
          className="absolute right-12 p-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300"
        >
          <Plus className="w-5 h-5" />
        </button>
        <button
          type="button"
          className="absolute right-2 p-2 text-gray-500 hover:text-cyan-600 dark:hover:text-cyan-400"
        >
          <Mic className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex flex-wrap gap-4 items-center">
        <DifficultySelect difficulty={difficulty} onChange={setDifficulty} />
        <DateTimeInput
          date={date}
          time={time}
          onDateChange={setDate}
          onTimeChange={setTime}
        />
      </div>
    </form>
  );
}