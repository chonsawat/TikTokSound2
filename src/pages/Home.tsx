import { Button } from "../components/Button";
import { InputId } from "../components/InputId";
import EventTable from "../features/EventTable";
import { tiktokUidSelector } from "../stores/input/input.selector";
import { useAppSelector } from "../stores/store";

const Home = () => {
  const uid = useAppSelector(tiktokUidSelector);

  const handleConnectClick = () => {
    console.log(uid);
  };

  return (
    <>
      <div className="m-10">
        <div>
          <h1 className="mt-5 text-3xl font-bold">TikTok Sound</h1>
          <InputId />
          <Button onClick={handleConnectClick}>Connect</Button>
        </div>
        <div className="mt-5">
          <EventTable />
        </div>
      </div>
    </>
  );
};

export default Home;
