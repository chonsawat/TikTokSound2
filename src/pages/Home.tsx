import { Outlet } from "react-router-dom";
import Connect from "../features/Connect";
import EventTable from "../features/EventTable";
import { useLocation } from "react-router-dom";

const Home = () => {
  const router = useLocation();

  return (
    <>
      <Connect pathname={router.pathname}>
        <Outlet />
      </Connect>
    </>
  );
};

export default Home;
