import { useToggle } from "./useToggle"

export const Toggle = () => {

    const {theme,toggleTheme} = useToggle();

    return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg border text-sm font-medium
                 bg-gray-100 dark:bg-gray-800
                 text-gray-900 dark:text-gray-100
                 hover:bg-gray-200 dark:hover:bg-gray-700
                 transition-colors"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} mode
    </button>
  );
    
}