import { Outlet } from "react-router";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="w-11/12 lg:w-5/6 mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
