
import Dashboards from "./components/Dashboards";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./components/HomePage";

const About = () => {
  return <h1>About</h1>
};


function App() {
  return (
    <div>

    <HomePage></HomePage>
    <Routes>
            <Route exact path='/aboutus' element={<Dashboards></Dashboards>}></Route>
    </Routes>
    
    </div> 
    
  );
}

export default App;
