import "./Programs.css";
import { useEffect, useState } from "react";

interface programsProps {
  id: number;
  poster: string;
  title: string;
}

function Programs() {
  const [programs, setPrograms] = useState<programsProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setPrograms(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {programs.map((serie) => (
        <div className="serie" key={serie.id}>
          <img id="image" src={serie.poster} alt={serie.title} />
          <p>{serie.title}</p>
        </div>
      ))}
    </>
  );
}

export default Programs;
