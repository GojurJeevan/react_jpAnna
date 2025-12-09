import { useToggle } from "./useToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export const Toggle = () => {
  const { theme, toggleTheme } = useToggle();

  return (
    <button onClick={toggleTheme} className="cursor-pointer">
      {
        theme === "light"
          ? <FontAwesomeIcon icon={faMoon} className="text-white"/> 
          : <FontAwesomeIcon icon={faSun} />  
      }
    </button>
  );
};
