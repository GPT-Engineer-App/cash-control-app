import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Index from "./pages/Index.jsx";
import Expenses from "./pages/Expenses.jsx";
import Savings from "./pages/Savings.jsx";
import Investments from "./pages/Investments.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/" element={<Index />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/investments" element={<Investments />} />
      </Routes>
    </Router>
  );
}

export default App;
