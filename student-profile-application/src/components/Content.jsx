import { Link, useParams } from "react-router-dom";
import students from "../data";

function Content() {
  const { id } = useParams();

  const student = students.find(
    (item) => item.id === Number(id)
  );

  if (!student) {
    return (
      <div>
        <h2>Student Not Found</h2>
        <Link to="/">Go Back</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Student Details</h1>

      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Gender:</strong> {student.gender}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>College:</strong> {student.college}</p>
      <p><strong>About:</strong> {student.about}</p>

      <Link to="/">← Back</Link>
    </div>
  );
}

export default Content;