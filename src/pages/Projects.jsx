import { useContext } from "react";
import { useToggle } from "../Toggle/useToggle";


export const Projects = () => {

    const {theme} = useToggle();
  return (
    <div className={`p-6 min-h-screen ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <h1 className="text-3xl font-bold">Projects Page</h1>
      <p className="mt-4">This is the Projects page content.</p>
    </div>
  );
};

export default Projects;
