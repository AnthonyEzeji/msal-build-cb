
import Dashboards from "./components/Dashboards";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./components/HomePage";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, useIsAuthenticated } from "@azure/msal-react";
import { callMsGraph } from "./graph";

const About = () => {
  return <h1>About</h1>
};


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/dashboard' element = {<Dashboards/>}/>
      </Routes>
     
    </div>

  );
}

export default App;
