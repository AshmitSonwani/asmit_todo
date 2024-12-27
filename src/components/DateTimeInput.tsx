// import React from 'react';
import { Calendar, Clock } from 'lucide-react';

interface DateTimeInputProps {
  date: string;
  time: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
}

export function DateTimeInput({ date, time, onDateChange, onTimeChange }: DateTimeInputProps) {
  return (
    <div className="flex gap-4">
      <div className="relative flex items-center">
        <Calendar className="absolute left-3 w-4 h-4 text-gray-500 dark:text-gray-400" />
        <input
          type="date"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
          className="pl-10 pr-3 py-1.5 rounded-lg border dark:bg-gray-800 dark:border-gray-700
            border-gray-200 bg-white text-sm focus:ring-1 focus:ring-cyan-500"
        />
      </div>
      <div className="relative flex items-center">
        <Clock className="absolute left-3 w-4 h-4 text-gray-500 dark:text-gray-400" />
        <input
          type="time"
          value={time}
          onChange={(e) => onTimeChange(e.target.value)}
          className="pl-10 pr-3 py-1.5 rounded-lg border dark:bg-gray-800 dark:border-gray-700
            border-gray-200 bg-white text-sm focus:ring-1 focus:ring-cyan-500"
        />
      </div>
    </div>
  );
}