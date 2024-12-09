import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import CalculatorPage from "../pages/CalculatorPage";
import Layout from "../layouts/Layout";

export default function RouterConfig() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/calculate" element={<CalculatorPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
