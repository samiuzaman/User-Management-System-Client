import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  Button,
  TableCell,
  TableBody,
} from "keep-react";
import { useEffect, useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link, NavLink } from "react-router";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://user-management-system-server-sage.vercel.app/allusers")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [setUsers]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://user-management-system-server-sage.vercel.app/allusers/${id}`,
          {
            method: "delete",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingUsers = users.filter((user) => user?._id !== id);
              setUsers(remainingUsers);
            }
          });
      }
    });
  };

  return (
    <div>
      <Button variant="outline">
        <NavLink to="/newusers" className="flex gap-2 users-center">
          New Users <FaUserLarge />
        </NavLink>
      </Button>
      <div className="my-8">
        <Table>
          <TableHeader className="bg-[#282D41]">
            <TableRow>
              <TableHead className="bg-[#282D41] text-white">
                <div className="max-w-[40px]">Id</div>
              </TableHead>
              <TableHead className="bg-[#282D41] text-white">
                <div className="max-w-[250px]">Name</div>
              </TableHead>
              <TableHead className="bg-[#282D41] text-white">
                <div>Email</div>
              </TableHead>
              <TableHead className="bg-[#282D41] text-white">
                <div className="w-[50px]">Gender</div>
              </TableHead>
              <TableHead className="bg-[#282D41] text-white">
                <div className="w-[50px]">Status</div>
              </TableHead>
              <TableHead className="bg-[#282D41] text-white">
                <div>Action</div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users?.map((user, index) => (
              <TableRow key={user._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <div className="max-w-[250px] truncate">{user.name}</div>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell className="flex justify-between">
                  <Link>
                    <MdEdit className="bg-[#3C393B] text-white text-2xl" />
                  </Link>

                  <MdDelete
                    onClick={() => handleDelete(user?._id)}
                    className="bg-[#EA4744] text-white text-2xl"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllUsers;
