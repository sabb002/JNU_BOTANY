import { Link, Outlet } from "react-router-dom";
import Subject from "../../../components/Subject";

export default function FirstSemester() {
  return (
    <div className="allSubjects">
      <Link to="BOT3101">
        <Subject
          course="Hydrobiology and Limnology-I"
          code="BOT3101"
          image="/images/subjects/hydrolimno.jpg"
        />
      </Link>
      <Link to="BOT3102">
        <Subject
          course="Plant Ecology-I"
          code="BOT3102"
          image="/images/subjects/ecology.jpg"
        />
      </Link>
      <Link to="BOT3103">
        <Subject
          course="Plant Pathology-I"
          code="BOT3103"
          image="/images/subjects/pathology.jpg"
        />
      </Link>
      <Link to="BOT3104">
        <Subject
          course="Cytogenetics-I"
          code="BOT3104"
          image="/images/subjects/cytogen.png"
        />
      </Link>
      <Link to="BOT3105">
        <Subject
          course="Embryology of Angiosperm"
          code="BOT3105"
          image="/images/subjects/embryoAngio.jpg"
        />
      </Link>

      <Link to="BOT3106">
        <Subject
          course="Economic Botany & Ethnobotany"
          code="BOT3106"
          image="/images/subjects/eco&eth.jpg"
        />
      </Link>

      <Outlet />
    </div>
  );
}
