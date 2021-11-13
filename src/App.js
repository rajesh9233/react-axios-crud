import { BrowserRouter } from "react-router-dom";
import "./App.css";
import UserWrapper from "./Components/UserWrapper";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserWrapper />
      </BrowserRouter>
    </>
  );
}

export default App;
