import { Link, Outlet } from "react-router-dom";
import Subject from "../../../components/Subject";

export default function FirstSemester() {
  return (
    <div className="allSubjects">
      <Link to="BOT4101">
        <Subject
          course="Microbiology-II"
          code="BOT4101"
          image="/images/subjects/micro_2.jpg"
        />
      </Link>
      <Link to="BOT4102">
        <Subject
          course="Phycology-II"
          code="BOT4102"
          image="/images/subjects/phycology_2.jpg"
        />
      </Link>
      <Link to="BOT4103">
        <Subject
          course="Mycology-II"
          code="BOT4103"
          image="/images/subjects/mycology_2.jpg"
        />
      </Link>
      <Link to="BOT4104">
        <Subject
          course="Gymnosperm & Palaeobotany"
          code="BOT4104"
          image="/images/subjects/g&p.jpg"
        />
      </Link>
      <Link to="BOT4105">
        <Subject
          course="Plant Anatomy"
          code="BOT4105"
          image="/images/subjects/plant_anatomy.jpg"
        />
      </Link>
      <Link to="BOT4106">
        <Subject
          course="Plant Physiology-I"
          code="BOT4106"
          image="/images/subjects/plant_physio.jpg"
        />
      </Link>
      <Outlet />
    </div>
  );
}
