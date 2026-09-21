
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import AddTeacher from "./pages/AddTeacher";
import Teachers from "./pages/Teachers";

export default function App() {
  const [teachers, setTeachers] = useState([]);

  return (
    <>
      <Navbar />

      <Routes>
       
        <Route
          path="/add-teacher"
          element={
            <AddTeacher setTeachers={setTeachers} />
          }
        />

        <Route
          path="/teachers"
          element={
            <Teachers teachers={teachers} />
          }
        />
      </Routes>
    </>
  );
}

