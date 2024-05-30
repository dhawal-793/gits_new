import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ExtraPage from "./pages/ExtraPage";
import Departments from "./pages/Departments";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Placements from "./pages/Placements";
import YearPlacements from "./pages/YearPlacements";
import GITSAlumniForum from "./pages/GITSAlumniForum";
import ResearchInnovation from "./pages/ResearchInnovation";
import FundedResearch from "./pages/FundedResearch";
import FacultyPublications from "./pages/FacultyPublications";
import COEIndustrialAutomation from "./pages/COEIndustrialAutomation";
import Hostel from "./pages/Hostel";
import CourseAdmission from "./pages/CourseAdmission";
import WhyGits from "./pages/WhyGits";
import VisionAndMission from "./pages/VisionAndMission";
import ManagementTeamsMessage from "./pages/ManagementTeamsMessage";
import Committee from "./pages/Committee";

const AllRoutes = () => {
  return (
    <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact-us" element={<Contact />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/departments" element={<Departments />} />
          <Route exact path="/placements" element={<Placements />} />
          <Route exact path="/placements/:year" element={<YearPlacements />} />
          <Route
            exact
            path="/gits-alumni-forum"
            element={<GITSAlumniForum />}
          />
          <Route
            exact
            path="/research-innovation"
            element={<ResearchInnovation />}
          />
          <Route exact path="/funded-research" element={<FundedResearch />} />
          <Route
            exact
            path="/faculty-publications"
            element={<FacultyPublications />}
          />
          <Route
            exact
            path="/coe-industrial-automation"
            element={<COEIndustrialAutomation />}
          />
          <Route exact path="/hostel" element={<Hostel />} />
          <Route
            exact
            path="/admission/:course"
            element={<CourseAdmission />}
          />
          <Route exact path="/why-gits" element={<WhyGits />} />
          <Route exact path="/vision-mission" element={<VisionAndMission />} />
          <Route
            exact
            path="/management-team/:management"
            element={<ManagementTeamsMessage />}
          />
          <Route exact path="/committee/:committee" element={<Committee />} />

          <Route exact path="/:id" element={<ExtraPage />} />
        </Routes>
  )
}

export default AllRoutes