import Dashboards from "./components/Dashboards";
import HowDataCanReduceTheChanceForMedicalMalpracticeLawsuits from "./components/blogs/HowDataCanReduceTheChanceForMedicalMalpracticeLawsuits";
import HealthcaresDigitalRevolutionFinallyATimeForOptimismWebinarPresentedByHra from "./components/blogs/HealthcaresDigitalRevolutionFinallyATimeForOptimismWebinarPresentedByHra";
import CommunicationIsTheKeyToPrevailInAMedicalLawsuit from "./components/blogs/CommunicationIsTheKeyToPrevailInAMedicalLawsuit";
import DukeUniversityThreeGoodThings from "./components/blogs/DukeUniversityThreeGoodThings";
import UsingMedicalMalpracticeData from "./components/blogs/UsingMedicalMalpracticeData";
import ReasonForOptimismRegardingCOVID from "./components/blogs/ReasonForOptimismRegardingCOVID";
import BeforeCOVID19Outlier from "./components/blogs/BeforeCOVID19Outlier";
import FearOfCovid19 from "./components/blogs/FearOfCovid19";
import OpenNotesAPracticeComplianceRequirement from "./components/blogs/OpenNotesAPracticeComplianceRequirement";
import HowRemotePatientMonitoring from "./components/blogs/HowRemotePatientMonitoring";

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
import TOTM from "./components/TOTM";
import Careers from "./components/Careers";
import RiskTransfer from "./components/RiskTransfer";
import PatientSafety from "./components/PatientSafety";
import ClaimsAndLitigtion from "./components/ClaimsAndLitigation";
import SelfInsurance from "./components/SelfInsurance";

import HospitalsPage from "./components/HospitalsPage";
import NYPhysiciansPage from "./components/NYPhysiciansPage";
import Indication from "./components/Indication";

import NewsAndEvents from "./components/NewsAndEvents";
import HICAminus from "./components/news/HICAminus";
import HRAParentCompany from "./components/news/HRAParentCompany";

import LeadershipDetails from "./components/LeadershipDetails";



const About = () => {
  return <h1>About</h1>
};


function App() {
  return (
    <div>
    
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
      
        <Route path='/login' element = {<LoginPage/>}/>
        <Route path ='/solutions/ny-physicians/indication/' element={<Indication/>}/>
        <Route path='/solutions/risk-transfer' element = {<RiskTransfer/>}/>
        <Route path='/solutions/patient-safety-and-risk-management' element = {<PatientSafety/>}/>
        <Route path='/solutions/claims-and-litigation' element = {<ClaimsAndLitigtion/>}/>
        <Route path='/solutions/self-insurance' element = {<SelfInsurance/>}/>
        <Route path='/solutions/hospitals' element = {<HospitalsPage/>}/>
        <Route path='/solutions/ny-physicians/' element={<NYPhysiciansPage/>}/>
        <Route path='/totm' element = {<TOTM/>}/>
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
        <Route path='/cxo/financial-benchmarking-live' element = {<PersonaBlogLive/>}/>
        <Route path='/cxo/department-insights-live' element = {<PersonaBlogLive/>}/>
        <Route path='/get-started' element = {<StepsPage/>}/>
        <Route path='/risk-manager' element = {<RiskManager/>}/>
        <Route path='/department-chair' element = {<DepartmentChair/>}/>
        <Route path='/cxo' element = {<CXO/>}/>
        <Route path='/solutions/hospitals/data-analytics' element = {<AnalyticsPage/>}/>
        <Route path='/dashboard' element = {<Dashboards/>}/>
        <Route path='/saved-reports' element = {<SavedReports/>}/>

        <Route path='/blog/how-data-can-reduce-the-chance-for-medical-malpractice-lawsuits' element = {<HowDataCanReduceTheChanceForMedicalMalpracticeLawsuits/>}/>
        <Route path='/blog/healthcares-digital-revolution-finally-a-time-for-optimism-webinar-presented-by-hra' element = {<HealthcaresDigitalRevolutionFinallyATimeForOptimismWebinarPresentedByHra/>}/>
        <Route path='blog/communication-is-the-key-to-prevail-in-a-medical-lawsuit' element = {<CommunicationIsTheKeyToPrevailInAMedicalLawsuit/>}/>
        <Route path='/blog/duke-university-three-good-things-program-on-addressing-physician--staff-burnout-presented-by-hra' element = {<DukeUniversityThreeGoodThings/>}/>
        <Route path='/blog/using-medical-malpractice-data-to-improve-patient-safety' element = {<UsingMedicalMalpracticeData/>}/>
        <Route path='/blog/reason-for-optimism-regarding-covid-related-lawsuits-against-practitioners-in-new-york' element = {<ReasonForOptimismRegardingCOVID/>}/>
        <Route path='/blog/before-covid-19-outlier-medical-malpractice-verdicts-were-risingwhats-nextbefore-covid-19-outlier-medical-malpractice-verdicts-were-risingwhats-next' element = {<BeforeCOVID19Outlier/>}/>
        <Route path='/blog/fear-of-covid-19-creates-its-own-risks-for-cardiologists' element = {<FearOfCovid19/>}/>
        <Route path='/blog/opennotes-a-practice-compliance-requirement-affecting-group-practices-vaps-and-hospitals-in-spring-2021' element = {<OpenNotesAPracticeComplianceRequirement/>}/>
        <Route path='/blog/how-remote-patient-monitoring-will-affect-medical-liability' element = {<HowRemotePatientMonitoring/>}/>
        
        <Route path='/blog' element = {<BlogsPage/>}/>
        <Route path='/about' element = {<AboutPage/>}/> 
        <Route path='/about/leadership' element = {<LeadershipPage/>}/>
        <Route path='/about/leadership/robert-kauffman/' element = {<LeadershipDetails/>}/>
        <Route path='/about/leadership/noeleen-doelger/' element = {<LeadershipDetails/>}/>
        <Route path='/about/leadership/david-lfeldman/' element = {<LeadershipDetails/>}/>
        <Route path='/about/leadership/fred-danback/' element = {<LeadershipDetails/>}/>
        <Route path='/about/leadership/peter-akolbert/' element = {<LeadershipDetails/>}/>
        <Route path='/about/leadership/rich-caldwell/' element = {<LeadershipDetails/>}/>
        <Route path='/about/leadership/brian-dalton/' element = {<LeadershipDetails/>}/>
        <Route path='/about/leadership/veronique-grenon/' element = {<LeadershipDetails/>}/>
        <Route path='/about/leadership/ross-hess/' element = {<LeadershipDetails/>}/>
        <Route path='/about/leadership/melissa-johnson/' element = {<LeadershipDetails/>}/>
        <Route path='/about/leadership/marc-lanzkowsky/' element = {<LeadershipDetails/>}/>
        <Route path='/about/leadership/michael-letang/' element = {<LeadershipDetails/>}/>
        <Route path='/about/leadership/steve-macaluso/' element = {<LeadershipDetails/>}/>
        <Route path='/about/leadership/duane-perricelli/' element = {<LeadershipDetails/>}/>
        <Route path='/about/leadership/rich-storey/' element = {<LeadershipDetails/>}/>

        <Route path='/about/careers' element = {<Careers/>}/>
        <Route path="/about/news-events" element = {<NewsAndEvents/>}/>
        <Route path='/about/news-events/hic-a-minus-rating-assigned-by-am-best' element = {<HICAminus/>}/>
        <Route path='/about/news-events/hra-parent-company-tdc-group-names-robert' element = {<HRAParentCompany/>}/>
        <Route path='/calendar' element = {<CustomerCalendar/>}/>     
        
      </Routes>
   
    </div>

  );
}

export default App;
