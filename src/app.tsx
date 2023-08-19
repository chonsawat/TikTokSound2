import { Button } from "./components/Button";
import { InputId } from "./components/InputId";
import { tiktokUidSelector } from "./stores/input/input.selector";
import { useSelector } from "react-redux";

const App = () => {
  const uid = useSelector(tiktokUidSelector);

  return (
    <>
      <div className="m-10">
        <div>
          <h1 className="mt-5 text-3xl font-bold">TikTok Sound</h1>
          <InputId />
          <Button
            onClick={() => {
              console.log(uid);
            }}
          >
            Connect
          </Button>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default App;
