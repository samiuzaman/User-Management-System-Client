import { Table, TableHead, TableHeader, TableRow, Button } from "keep-react";
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
      <div>
        <Table>
          <TableHeader className="bg-[#282D41]">
            <TableRow>
              <TableHead className="bg-[#282D41] text-white">
                <div className="max-w-[40px]">Id</div>
              </TableHead>
              <TableHead className="bg-[#282D41] text-white">
                <div className="max-w-[200px]">Name</div>
              </TableHead>
              <TableHead className="bg-[#282D41] text-white">
                <div className="w-[150px]">Email</div>
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
          {/* <TableBody>
            {tableData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="max-w-[250px] truncate">{item.fileName}</div>
                </TableCell>
                <TableCell>{item.fileFormat}</TableCell>
                <TableCell>{item.ratio}</TableCell>
                <TableCell>{item.resolution}</TableCell>
                <TableCell>{item.fileSize}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody> */}
        </Table>
      </div>
    </div>
  );
};

export default AllUsers;
