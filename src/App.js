
import Dashboards from "./components/Dashboards";
import FirstBlog from "./components/blogs/FirstBlog";
import CustomerCalendar from "./components/customer/CustomerCalendar";
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
        <Route path='/firstblog' element = {<FirstBlog/>}/>
        <Route path='/calendar' element = {<CustomerCalendar/>}/>     
      </Routes>
     
    </div>

  );
}

export default App;
