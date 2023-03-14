import { Link, Outlet } from "react-router-dom";
import Subject from "../../../components/Subject";

export default function FirstSemester() {
  return (
    <div className="allSubjects">
      <Link to="BOT2101">
        <Subject
          course="Pteridophyta"
          code="BOT2101"
          image="/images/subjects/pteris.png"
        />
      </Link>
      <Link to="BOT2102">
        <Subject
          course="Cytology"
          code="BOT2102"
          image="/images/subjects/cytology.jpg"
        />
      </Link>
      <Link to="BOT2103">
        <Subject
          course="Fundamental Genetics-I"
          code="BOT2103"
          image="/images/subjects/genetics.jpg"
        />
      </Link>
      <Link to="BOT2104">
        <Subject
          course="Zoology-III"
          code="BOT2104"
          image="/images/subjects/appliedZoo.jpg"
        />
      </Link>
      <Link to="BOT2105">
        <Subject
          course="Chemistry-II"
          code="BOT2105"
          image="/images/subjects/chem_2.jpg"
        />
      </Link>
      <Outlet />
    </div>
  );
}
