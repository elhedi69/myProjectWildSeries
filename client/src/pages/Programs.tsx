import "./Programs.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Program = {
  id: number;
  poster: string;
  title: string;
};

function Programs() {
  const [programs, setPrograms] = useState([] as Program[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs`)

      .then((response) => response.json())

      .then((data: Program[]) => {
        setPrograms(data);
      });
  }, []);

  return (
    <>
      <Link to={"/programs/new"}>Ajouter</Link>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <img id="image" src={program.poster} alt="" />
            <Link to={`/programs/${program.id}`}>{program.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Programs;
