import React from "react";
import Navbar from "./Components/Navbar";
import Heros from "./Components/Heros";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import TerminalSection from "./Components/TerminalSection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DynamicIconCloud from "./Components/DynamicIconCloud";

import WallOfFame from "./Components/WallOfFame";
import CertificationsPage from "./Components/CertificationsPage";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Heros />
          <WallOfFame />
          <DynamicIconCloud />
          <Skills />
          <Projects />
          <Footer />
          <ScrollToTop />
        </>
      ),
    },
    {
      path: "/terminal",
      element: (
        <>
          <Navbar />
          <Heros />
          <WallOfFame />
          <DynamicIconCloud />
          <Skills />
          <Projects />
          <Footer />
          <TerminalSection />
          <ScrollToTop />
        </>
      ),
    },
    {
      path: "/certifications",
      element: <CertificationsPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;