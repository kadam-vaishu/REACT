import { Link } from "react-router-dom";
import students from "../data";

function Home() {
  return (
    <div>
      <h1>Student List</h1>

      {students.map((student) => (
        <div
          key={student.id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            margin: "15px",
            borderRadius: "8px"
          }}
        >
          <h2>{student.name}</h2>
          <p>Course: {student.course}</p>

          <Link to={`/topic/${student.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;