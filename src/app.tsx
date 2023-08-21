import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SteamingPage from "./pages/SteamingPage";
import EventTable from "./features/EventTable";

console.log("App");

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />}>
          <Route index element={<EventTable />} />
          <Route path="stream" element={<SteamingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
