import { FaMoon, FaSun } from "react-icons/fa";
import useTheme from "../context/theme";

const ThemeBtn = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const isDarkMode = themeMode === "dark";

  const onChangeBtn = () => {
    if (isDarkMode) {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  return (
    <button
      onClick={onChangeBtn}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <FaSun className="text-yellow-500" />
      ) : (
        <FaMoon className="text-gray-700" />
      )}
    </button>
  );
};

export default ThemeBtn;
