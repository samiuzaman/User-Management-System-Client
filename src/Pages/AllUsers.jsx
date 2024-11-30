import { Button } from "keep-react";
import { FaUserLarge } from "react-icons/fa6";
import { NavLink } from "react-router";

const AllUsers = () => {
  return (
    <div>
      <Button variant="outline">
        <NavLink to="/newusers" className="flex gap-2 items-center">
          New Users <FaUserLarge />
        </NavLink>
      </Button>
    </div>
  );
};

export default AllUsers;
