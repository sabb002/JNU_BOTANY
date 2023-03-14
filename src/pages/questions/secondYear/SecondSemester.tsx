import { Link, Outlet } from "react-router-dom";
import Subject from "../../../components/Subject";

export default function SecondSemester() {
  return (
    <div className="allSubjects">
      <Link to="BOT2201">
        <Subject
          course="Microbiology-II"
          code="BOT2201"
          image="/images/subjects/micro_2.jpg"
        />
      </Link>
      <Link to="BOT2202">
        <Subject
          course="Phycology-II"
          code="BOT2202"
          image="/images/subjects/phycology_2.jpg"
        />
      </Link>
      <Link to="BOT2203">
        <Subject
          course="Mycology-II"
          code="BOT2203"
          image="/images/subjects/mycology_2.jpg"
        />
      </Link>
      <Link to="BOT2204">
        <Subject
          course="Gymnosperm & Palaeobotany"
          code="BOT2204"
          image="/images/subjects/g&p.jpg"
        />
      </Link>
      <Link to="BOT2205">
        <Subject
          course="Plant Anatomy"
          code="BOT2205"
          image="/images/subjects/plant_anatomy.jpg"
        />
      </Link>
      <Link to="BOT2206">
        <Subject
          course="Plant Physiology-I"
          code="BOT2206"
          image="/images/subjects/plant_physio.jpg"
        />
      </Link>
      <Outlet />
    </div>
  );
}
