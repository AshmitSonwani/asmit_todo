// import React from 'react';
import { TaskAnalytics } from '../types';
import { Trophy, Target, Clock } from 'lucide-react';

interface AnalyticsProps {
  analytics: TaskAnalytics;
}

export function Analytics({ analytics }: AnalyticsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-900/20 dark:to-cyan-900/20 
        p-4 rounded-lg border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
          <h3 className="font-semibold text-gray-800 dark:text-gray-200">Completed Tasks</h3>
        </div>
        <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mt-2">{analytics.completedTasks}</p>
      </div>
      
      <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 dark:from-emerald-900/20 dark:to-cyan-900/20 
        p-4 rounded-lg border border-emerald-200/50 dark:border-emerald-800/50 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
          <h3 className="font-semibold text-gray-800 dark:text-gray-200">Total Points</h3>
        </div>
        <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-2">{analytics.totalPoints}</p>
      </div>
      
      <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 dark:from-purple-900/20 dark:to-cyan-900/20 
        p-4 rounded-lg border border-purple-200/50 dark:border-purple-800/50 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-purple-500 dark:text-purple-400" />
          <h3 className="font-semibold text-gray-800 dark:text-gray-200">Completion Rate</h3>
        </div>
        <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-2">
          {analytics.completionRate}%
        </p>
      </div>
    </div>
  );
}