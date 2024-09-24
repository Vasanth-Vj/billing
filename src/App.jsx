import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard"; // Fix the typo from Dashboart to Dashboard
import CustomerHistory from "./components/CustomerHistory";
import Invoice from "./components/Invoice";
import QuotesAndInvoices from "./components/billing/QuotesAndInvoices";
import Account from "./components/settings/Account";
import Preview from "./components/billing/Preview";
import CreateInvoice from "./components/billing/CreateInvoice";
import ViewInvoice from "./components/billing/ViewInvoice";
import History from "./components/history/History";
import Login from "./components/auth/Login";
import Main from "./components/Main";
import Profile from "./components/settings/Profile";
import MyAdvisor from "./components/myAdvisor/MyAdvisor";
import HelpCenter from "./components/helpCenter/HelpCenter";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />}>
          <Route index element={<Dashboard />} />
          <Route path="create-invoice" element={<CreateInvoice />} />
          <Route path="invoices" element={<QuotesAndInvoices />} />
          <Route path="preview" element={<Preview />} />
          <Route path="view-invoice" element={<ViewInvoice />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="clients" element={<CustomerHistory />} />
          <Route path="account" element={<Account />} />
          <Route path="profile" element={<Profile />} />
          <Route path="history" element={<History />} />
          <Route path="advisor" element={<MyAdvisor/>} />
          <Route path="help-center" element={<HelpCenter />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
