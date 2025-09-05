import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'dark';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (!mounted) return null;

  const getThemeIcon = () => {
    return theme === 'light' ? '☀️' : '🌙';
  };

  const getThemeLabel = () => {
    return theme === 'light' ? 'Light' : 'Dark';
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="sm"
      className="border-theme text-theme hover:bg-theme-hover transition-colors"
      title={`Current theme: ${getThemeLabel()}. Click to switch to ${theme === 'light' ? 'dark' : 'light'} mode.`}
    >
      <span className="mr-2">{getThemeIcon()}</span>
      {getThemeLabel()}
    </Button>
  );
}
