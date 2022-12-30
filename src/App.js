
import Dashboards from "./components/Dashboards";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./components/HomePage";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { callMsGraph } from "./graph";

const About = () => {
  return <h1>About</h1>
};


function App() {
  return (
    <div>
      <UnauthenticatedTemplate>
        <HomePage></HomePage>
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <Dashboards></Dashboards>
      </AuthenticatedTemplate>
    </div>

  );
}

export default App;
