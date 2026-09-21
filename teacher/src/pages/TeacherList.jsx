
import { Link } from "react-router-dom";

export default function TeacherList({ teachers }) {
  return (
    <div>
      <h2>Teacher List</h2>

      <ul>
        {teachers.map((teacher, index) => (
          <li key={index}>
            <Link to={`/teacher/${index}`}>
              <strong>{teacher.teachername}</strong>
            </Link>

            <p>
              Specialization: {teacher.specialization}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

