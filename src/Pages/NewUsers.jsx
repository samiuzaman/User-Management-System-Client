import { NavLink } from "react-router";
import { FaUserLarge } from "react-icons/fa6";
import { Envelope, Lock, User } from "phosphor-react";
import { Button, InputIcon, Input, Label } from "keep-react";

const NewUsers = () => {
  return (
    <div>
      <Button variant="outline">
        <NavLink to="/" className="flex gap-2 items-center">
          All Users <FaUserLarge />
        </NavLink>
      </Button>
      <div>
        <form className="mx-auto lg:w-5/6 space-y-2 rounded-lg border p-8 shadow-md my-12">
          <div className="text-center mb-8">
            <h3 className="text-black text-2xl font-bold">New User</h3>
            <p className="text-gray-500">
              User the below form to create a new accout
            </p>
          </div>
          {/* Name Row */}
          <fieldset className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <div className="relative">
              <Input placeholder="Enter Name" className="ps-11" />
              <InputIcon>
                <User size={19} color="#AFBACA" />
              </InputIcon>
            </div>
          </fieldset>
          {/* Email Row */}
          <fieldset className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Input placeholder="Enter email" className="ps-11" />
              <InputIcon>
                <Envelope size={19} color="#AFBACA" />
              </InputIcon>
            </div>
          </fieldset>
          {/* Gender Row */}
          <div className="flex items-center gap-8  py-4">
            <h4 className="text-gray-500">Gender:</h4>
            <fieldset className=" flex items-center gap-2">
              <input type="radio" id="male" name="gender" />
              <label>Male</label>
            </fieldset>
            <fieldset className=" flex items-center gap-2">
              <input type="radio" id="male" name="gender" />
              <label>Female</label>
            </fieldset>
          </div>
          {/* Status Row */}
          <div className="flex items-center gap-8  pb-4">
            <h4 className="text-gray-500">Status:</h4>
            <fieldset className=" flex items-center gap-2">
              <input type="radio" id="male" name="gender" />
              <label>Active</label>
            </fieldset>
            <fieldset className=" flex items-center gap-2">
              <input type="radio" id="male" name="gender" />
              <label>Inactive</label>
            </fieldset>
          </div>
          <Button
            size="sm"
            color="secondary"
            type="submit"
            className="w-full bg-[#14D791]"
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewUsers;
