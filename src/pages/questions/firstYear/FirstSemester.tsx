import { Link, Outlet } from "react-router-dom";
import Subject from "../../../components/Subject";

export default function FirstSemester() {
  return (
    <div className="allSubjects">
      <Link to="BOT1101">
        <Subject
          course="Microbiology-I"
          code="BOT1101"
          image="/images/subjects/microbiology.jpg"
        />
      </Link>
      <Link to="BOT1102">
        <Subject
          course="Phycology-I"
          code="BOT1102"
          image="/images/subjects/phycology.jpg"
        />
      </Link>
      <Link to="BOT1103">
        <Subject
          course="Taxonomy of Angiosperm-I"
          code="BOT1103"
          image="/images/subjects/taxonomy.jpg"
        />
      </Link>
      <Link to="BOT1104">
        <Subject
          course="History of Liberation war"
          code="BOT1104"
          image="/images/subjects/liberation.jpg"
        />
      </Link>
      <Link to="BOT1105">
        <Subject
          course="Zoology-I"
          code="BOT1104"
          image="/images/subjects/zoology.jpg"
        />
      </Link>
      <Outlet />
    </div>
  );
}
