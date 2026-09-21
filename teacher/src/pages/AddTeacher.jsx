import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTeacher({ setTeachers }) {
  const [teachername, setTeacherName] = useState("");
  const [specialization, setSpecialization] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTeacher = {
      teachername,
      specialization,
    };

    setTeachers((prevTeachers) => [
      ...prevTeachers,
      newTeacher,
    ]);

    setTeacherName("");
    setSpecialization("");

    navigate("/teachers");
  };

  return (
    <div>
      <h1>Add Teacher</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={teachername}
          onChange={(e) => setTeacherName(e.target.value)}
          placeholder="Teacher Name"
        />

        <br />
        <br />

        <input
          type="text"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          placeholder="Specialization"
        />

        <br />
        <br />

        <button type="submit">
          Add Teacher
        </button>
      </form>
    </div>
  );
}

