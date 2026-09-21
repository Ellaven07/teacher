export default function Teachers({ teachers }) {
  return (
    <div>
      <h1>Teachers</h1>

      {teachers.map((teacher, index) => (
        <div key={index}>
          <p>
            <strong>Teacher Name:</strong>{" "}
            {teacher.teachername}
          </p>

          <p>
            <strong>Specialization:</strong>{" "}
            {teacher.specialization}
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
}

