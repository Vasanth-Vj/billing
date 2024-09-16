import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Billing from "./components/Billing";
import Dashboard from "./components/Dashboard"; // Fix the typo from Dashboart to Dashboard
import CustomerHistory from "./components/CustomerHistory";
import HorizontalNavBar from "./components/HorizontalNavBar";
import VerticalNavBar from "./components/VerticalNavBar";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <VerticalNavBar />
        <div className="flex-grow flex flex-col">
          <HorizontalNavBar />
          <div className="flex-grow p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/customer-history" element={<CustomerHistory />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
