import { Link, Outlet } from "react-router-dom";
import Subject from "../../../components/Subject";

export default function SecondSemester() {
  return (
    <div className="allSubjects">
      <Link to="BOT3201">
        <Subject
          course="Taxonomy of Angiosperms-II"
          code="BOT3201"
          image="/images/subjects/taxo_2.jpg"
        />
      </Link>
      <Link to="BOT3202">
        <Subject
          course="Plant Ecology-II"
          code="BOT3202"
          image="/images/subjects/eco_2.jpg"
        />
      </Link>
      <Link to="BOT3203">
        <Subject
          course="Environmental Science"
          code="BOT3203"
          image="/images/subjects/envSci.jpg"
        />
      </Link>
      <Link to="BOT3204">
        <Subject
          course="Plant Pathology-II"
          code="BOT3204"
          image="/images/subjects/pathology_2.jpg"
        />
      </Link>
      <Link to="BOT3205">
        <Subject
          course="Plant Biochemistry-I"
          code="BOT3205"
          image="/images/subjects/biochem.jpg"
        />
      </Link>
      <Link to="BOT3206">
        <Subject
          course="Biostatistics-I"
          code="BOT3206"
          image="/images/subjects/bioStat.jpg"
        />
      </Link>
      <Outlet />
    </div>
  );
}
