import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateSOP from "./pages/CreateSOP";
import CreateSOPStep2 from "./pages/CreateSOPStep2";
import CreateSOPStep3 from "./pages/CreateSOPStep3";
import CreateSOPStep4 from "./pages/CreateSOPStep4";
import CreateSOPStep5 from "./pages/CreateSOPStep5";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-sop" element={<CreateSOP />} />
        <Route path="/create-sop-step2" element={<CreateSOPStep2 />} />
        <Route path="/create-sop-step3" element={<CreateSOPStep3 />} />
        <Route path="/create-sop-step4" element={<CreateSOPStep4 />} />
        <Route path="/create-sop-step5" element={<CreateSOPStep5 />} />
      </Routes>
    </Router>
  );
}

export default App; // ✅ Korrektes Default-Export
