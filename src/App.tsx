import { useState, useEffect } from 'react';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import { Analytics } from './components/Analytics';
import { ThemeToggle } from './components/ThemeToggle';
import { Task, TaskAnalytics, TaskDifficulty } from './types';
import { useDarkMode } from './hooks/useDarkMode';
import { loadFromLocalStorage, saveToLocalStorage } from './utils/storage';

const getPointsByDifficulty = (difficulty: TaskDifficulty): number => {
  const points = { easy: 5, medium: 10, hard: 15 };
  return points[difficulty];
};

function App() {
  const [isDark, setIsDark] = useDarkMode();
  const [tasks, setTasks] = useState<Task[]>(() => loadFromLocalStorage('tasks') ?? []);
  const [analytics, setAnalytics] = useState<TaskAnalytics>({
    completedTasks: 0,
    totalPoints: 0,
    productiveHours: [],
    completionRate: 0,
  });

  useEffect(() => {
    saveToLocalStorage('tasks', tasks);
    
    const completed = tasks.filter((task) => task.completed).length;
    const total = tasks.length;
    const points = tasks.reduce((acc, task) => acc + (task.completed ? task.points : 0), 0);
    
    setAnalytics({
      completedTasks: completed,
      totalPoints: points,
      productiveHours: ['9:00', '14:00', '16:00'],
      completionRate: total > 0 ? Math.round((completed / total) * 100) : 0,
    });
  }, [tasks]);

  const addTask = (title: string, difficulty: TaskDifficulty, dueDate?: Date) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      difficulty,
      priority: 'medium',
      completed: false,
      createdAt: new Date(),
      dueDate,
      subtasks: [],
      points: getPointsByDifficulty(difficulty),
      tags: [],
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (updatedTask: Task) => {
    setTasks(tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    ));
  };

  return (
    <div className={`min-h-screen transition-colors duration-200
      ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Asmit Todo</h1>
          </div>
          <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
        </div>

        <Analytics analytics={analytics} />
        <TaskInput onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          onUpdateTask={updateTask}
        />
      </div>
    </div>
  );
}

export default App;