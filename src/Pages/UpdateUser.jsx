import { NavLink, useLoaderData } from "react-router";
import { FaUserLarge } from "react-icons/fa6";
import { Envelope, User } from "phosphor-react";
import { Button, InputIcon, Input, Label } from "keep-react";
import Swal from "sweetalert2";

// import Swal from "sweetalert2";

const UpdateUser = () => {
  const singleUser = useLoaderData();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const status = form.status.value;
    const updatedUser = { name, email, gender, status };
    fetch(
      `https://users-manage-system.vercel.app/allusers/${singleUser?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            text: "Profile UpdateSuccessfully!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div>
      <Button variant="outline">
        <NavLink to="/" className="flex gap-2 items-center">
          All User <FaUserLarge />
        </NavLink>
      </Button>
      <div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto lg:w-5/6 space-y-2 rounded-lg border p-8 shadow-md my-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-black text-2xl font-bold">Update Profile</h3>
          </div>
          {/* Name Row */}
          <fieldset className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <div className="relative">
              <Input
                name="name"
                placeholder="Enter Name"
                defaultValue={singleUser.name}
                className="ps-11"
              />
              <InputIcon>
                <User size={19} color="#AFBACA" />
              </InputIcon>
            </div>
          </fieldset>
          {/* Email Row */}
          <fieldset className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Input
                name="email"
                placeholder="Enter email"
                defaultValue={singleUser.email}
                className="ps-11"
              />
              <InputIcon>
                <Envelope size={19} color="#AFBACA" />
              </InputIcon>
            </div>
          </fieldset>
          {/* Gender Row */}
          <div className="flex items-center gap-8  py-4">
            <h4 className="text-gray-500">Gender:</h4>
            <fieldset className=" flex items-center gap-2">
              <input type="radio" id="male" name="gender" value="Male" />
              <label>Male</label>
            </fieldset>
            <fieldset className=" flex items-center gap-2">
              <input type="radio" id="male" name="gender" value="Female" />
              <label>Female</label>
            </fieldset>
          </div>
          {/* Status Row */}
          <div className="flex items-center gap-8  pb-4">
            <h4 className="text-gray-500">Status:</h4>
            <fieldset className=" flex items-center gap-2">
              <input type="radio" id="male" name="status" value="Active" />
              <label>Active</label>
            </fieldset>
            <fieldset className=" flex items-center gap-2">
              <input type="radio" id="male" name="status" value="Inactive" />
              <label>Inactive</label>
            </fieldset>
          </div>
          <Button
            size="sm"
            color="secondary"
            type="submit"
            className="w-full bg-[#14D791] text-black hover:text-white"
          >
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
