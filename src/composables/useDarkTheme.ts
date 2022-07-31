import { ref, computed, onMounted } from 'vue';

export function useDarkTheme() {
  const userTheme = ref('light');
  const isDark = computed(() => userTheme.value === 'dark');

  onMounted(() => {
    userTheme.value = getTheme() || getUserPreference();
  });

  function getTheme(): string | null {
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

  return {
    userTheme,
    isDark,
    getTheme,
    setTheme,
    toggleTheme,
    getUserPreference,
  };
}

export default useDarkTheme;
