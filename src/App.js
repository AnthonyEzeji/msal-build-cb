
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
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import AnalyticsPage from "./components/AnalyticsPage";
import BlogsPage from "./components/blogs/BlogsPage";
import LeadershipPage from "./components/LeadershipPage";
import AboutPage from "./components/AboutPage";
import SavedReports from "./components/SavedReport";
import StepsPage from './components/StepsPage'
import LoginPage from "./components/LoginPage";
import RiskManager from "./components/personas/RiskManager";
import DepartmentChair from "./components/personas/DepartmentChair";
import PersonaBlog from "./components/personas/PersonaBlog";
import CXO from "./components/personas/CXO";
import PersonaBlogLive from "./components/personas/PersonaBlogLive";
const About = () => {
  return <h1>About</h1>
};


function App() {
  return (
    <div>
    
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/login' element = {<LoginPage/>}/>
        <Route path='/risk-manager/med-mal' element = {<PersonaBlog/>}/>
        <Route path='/risk-manager/frequency-severity-trends' element = {<PersonaBlog/>}/>
        <Route path='/risk-manager/national-benchmarking' element = {<PersonaBlog/>}/>
        <Route path='/department-chair/freq-flyers' element = {<PersonaBlog/>}/>
        <Route path='/department-chair/icd-level-malpractice-insights' element = {<PersonaBlog/>}/>
        <Route path='/department-chair/med-mal-contributing-factors' element = {<PersonaBlog/>}/>
        <Route path='/cxo/kpi-boardroom' element = {<PersonaBlog/>}/>
        <Route path='/cxo/financial-benchmarking' element = {<PersonaBlog/>}/>
        <Route path='/cxo/department-insights' element = {<PersonaBlog/>}/>
        <Route path='/risk-manager/med-mal-live' element = {<PersonaBlogLive/>}/>
        <Route path='/risk-manager/frequency-severity-trends-live' element = {<PersonaBlogLive/>}/>
        <Route path='/risk-manager/national-benchmarking-live' element = {<PersonaBlogLive/>}/>
        <Route path='/department-chair/freq-flyers-live' element = {<PersonaBlogLive/>}/>
        <Route path='/department-chair/icd-level-malpractice-insights-live' element = {<PersonaBlogLive/>}/>
        <Route path='/department-chair/med-mal-contributing-factors-live' element = {<PersonaBlogLive/>}/>
        <Route path='/cxo/kpi-boardroom-live' element = {<PersonaBlogLive/>}/>
        <Route path='/cxo/financial-benchmarking-live' element = {<PersonaBlog/>}/>
        <Route path='/cxo/department-insights-live' element = {<PersonaBlog/>}/>
        <Route path='/get-started' element = {<StepsPage/>}/>
        <Route path='/risk-manager' element = {<RiskManager/>}/>
        <Route path='/department-chair' element = {<DepartmentChair/>}/>
        <Route path='/cxo' element = {<CXO/>}/>
        <Route path='/solutions/hospitals/data-analytics' element = {<AnalyticsPage/>}/>
        <Route path='/dashboard' element = {<Dashboards/>}/>
        <Route path='/saved-reports' element = {<SavedReports/>}/>
        <Route path='/firstblog' element = {<FirstBlog/>}/>
        <Route path='/blog' element = {<BlogsPage/>}/>
        <Route path='/about' element = {<AboutPage/>}/> 
        <Route path='/about/leadership' element = {<LeadershipPage/>}/>
        <Route path='/calendar' element = {<CustomerCalendar/>}/>     
      </Routes>
   
    </div>

  );
}

export default App;
