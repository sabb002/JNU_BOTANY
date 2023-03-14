import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import "./Questions.css";

export default function Questions() {
  const [activeY, setActiveY] = useState("");
  const [hero, setHero] = useState(true);

  const handleYclick = (year: string) => {
    setActiveY(year);
  };

  const remove = () => {
    setHero(false);
  };

  useEffect(() => {
    document.title = "Questions - Jnu Botany";
  }, []);

  return (
    <>
      <section className="main questions">
        <h2 className="courseTitle">Bachelor of Science (B.Sc)</h2>
        <div className="links" onClick={remove}>
          <Link
            className={activeY === "first" ? "active" : ""}
            to="first"
            onClick={() => handleYclick("first")}
          >
            1st year
          </Link>
          <Link
            className={activeY === "second" ? "active" : ""}
            to="second"
            onClick={() => handleYclick("second")}
          >
            2nd year
          </Link>
          <Link
            className={activeY === "third" ? "active" : ""}
            to="third"
            onClick={() => handleYclick("third")}
          >
            3rd year
          </Link>
          <Link
            className={activeY === "final" ? "active" : ""}
            to="final"
            onClick={() => handleYclick("final")}
          >
            4th year
          </Link>
        </div>

        {hero ? (
          <div className="questionHero">
            <motion.img
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              src="/images/questionHero.png"
              alt="image"
            />
          </div>
        ) : (
          <Outlet />
        )}
      </section>
    </>
  );
}
