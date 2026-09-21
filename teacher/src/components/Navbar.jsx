import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
     <h1>Teachers Management system</h1>
      <nav>
        <Link to="/teachers">Teachers List</Link>{" "}
        <Link to="/add-teacher">Add Teacher</Link>
      </nav>

     
    </>
  );
}
