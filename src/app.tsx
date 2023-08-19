import { Button } from "./components/Button";
import { InputId } from "./components/InputId";

const App = () => {
  return (
    <>
      <div className="m-10">
        <div>
          <h1 className="mt-5 text-3xl font-bold">TikTok Sound</h1>
          <InputId />
          <Button>Connect</Button>
        </div>
        <div>
            
        </div>
      </div>
    </>
  );
};

export default App;
