import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import RoomsList from "./routeComponents/RoomsList";
import NewRoom from "./routeComponents/room/NewRoom";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/new-room" component={NewRoom} />
      <Route exact path="/" component={RoomsList} />
    </BrowserRouter>
  );
}

export default App;
