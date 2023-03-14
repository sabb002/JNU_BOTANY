import "./Subject.css";

interface Props {
  course: string;
  code: string;
  image: string;
}

export default function Subject({ image, course, code }: Props) {
  return (
    <article className="subject">
      <div
        className="image"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="textWrapper">
        <h3 className="code">{code}</h3>
        <h4 className="course">{course}</h4>
      </div>
    </article>
  );
}
// `${image}`
