import { Link, Outlet } from "react-router-dom";
import Subject from "../../../components/Subject";

export default function SecondSemester() {
  return (
    <div className="allSubjects">
      <Link to="BOT1201">
        <Subject
          course="Micology-I"
          code="BOT1201"
          image="/images/subjects/mycology.jpg"
        />
      </Link>
      <Link to="BOT1202">
        <Subject
          course="Bryophyta"
          code="BOT1202"
          image="/images/subjects/bryophyta.jpg"
        />
      </Link>
      <Link to="BOT1203">
        <Subject
          course="Biodiversity"
          code="BOT1203"
          image="/images/subjects/biodiversity.jpg"
        />
      </Link>
      <Link to="BOT1204">
        <Subject
          course="Zoology-II"
          code="BOT1204"
          image="/images/subjects/chordate.jpg"
        />
      </Link>
      <Outlet />
    </div>
  );
}
