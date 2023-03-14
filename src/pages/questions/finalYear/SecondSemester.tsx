import { Link, Outlet } from "react-router-dom";
import Subject from "../../../components/Subject";

export default function SecondSemester() {
  return (
    <div className="allSubjects">
      <Link to="BOT4201">
        <Subject
          course="Microbiology-II"
          code="BOT4201"
          image="/images/subjects/micro_2.jpg"
        />
      </Link>
      <Link to="BOT4202">
        <Subject
          course="Phycology-II"
          code="BOT4202"
          image="/images/subjects/phycology_2.jpg"
        />
      </Link>
      <Link to="BOT4203">
        <Subject
          course="Mycology-II"
          code="BOT4203"
          image="/images/subjects/mycology_2.jpg"
        />
      </Link>
      <Link to="BOT4204">
        <Subject
          course="Gymnosperm & Palaeobotany"
          code="BOT4204"
          image="/images/subjects/g&p.jpg"
        />
      </Link>
      <Link to="BOT4205">
        <Subject
          course="Plant Anatomy"
          code="BOT4205"
          image="/images/subjects/plant_anatomy.jpg"
        />
      </Link>
      <Outlet />
    </div>
  );
}
