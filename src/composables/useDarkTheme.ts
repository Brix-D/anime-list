import { ref } from 'vue';

export function useDarkTheme() {
  const userTheme = ref('light');

  function getTheme() {
    return localStorage.getItem('user-theme');
  }
  function setTheme(theme: string): void {
    localStorage.setItem('user-theme', theme);
    userTheme.value = theme;
    document.documentElement.className = theme;
  }
  function toggleTheme(): void {
    const activeTheme = localStorage.getItem('user-theme');
    if (activeTheme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  function getUserPreference(): string {
    const hasDarkPreference = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    if (hasDarkPreference) {
      return 'dark';
    } else {
      return 'light';
    }
  }

  return { userTheme, getTheme, setTheme, toggleTheme, getUserPreference };
}

export default useDarkTheme;
