import { Button } from "keep-react";
import { NavLink } from "react-router";
import { FaUserLarge } from "react-icons/fa6";

const NewUsers = () => {
  return (
    <div>
      <Button variant="outline">
        <NavLink to="/" className="flex gap-2 items-center">
          All Users <FaUserLarge />
        </NavLink>
      </Button>
    </div>
  );
};

export default NewUsers;
