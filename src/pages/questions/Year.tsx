import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Year() {
  const [activeY, setActiveY] = useState("");

  const handleYclick = (year: string) => {
    setActiveY(year);
  };

  useEffect(() => {
    document.title = "Questions - Jnu Botany";
  }, []);
  return (
    <>
      <div className="links semester">
        <Link
          className={activeY === "first" ? "active" : ""}
          to="1stSemester"
          onClick={() => handleYclick("first")}
        >
          1st semester
        </Link>
        <Link
          className={activeY === "second" ? "active" : ""}
          to="2ndSemester"
          onClick={() => handleYclick("second")}
        >
          2nd semester
        </Link>
      </div>
      <Outlet />
    </>
  );
}
