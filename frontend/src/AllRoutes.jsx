import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import WhyGits from "./pages/WhyGits";
import VisionAndMission from "./pages/VisionAndMission";
import ManagementTeamsMessage from "./pages/ManagementTeamsMessage";
import InstitutionsInnovationCouncil from "./pages/InstitutionsInnovationCouncil";
import IQAC from "./pages/IQAC";
import SubjectAdmission from "./pages/SubjectAdmission";
import Hostel from "./pages/Hostel";
import ResearchInnovation from "./pages/ResearchInnovation";
import FundedResearch from "./pages/FundedResearch";
import FacultyPublications from "./pages/FacultyPublications";
import COEIndustrialAutomation from "./pages/COEIndustrialAutomation";
import CDC from "./pages/CDC";
import EnterpreneurshipCell from "./pages/EnterpreneurshipCell";
import TrainingPartners from "./pages/TrainingPartners";
import AssessmentPartners from "./pages/AssessmentPartners";
import Blog from "./pages/Blog";
import BlogIdPage from "./pages/BlogIdPage";
import Contact from "./pages/Contact";

// TODO:

import CurricularAspect from "./pages/CurricularAspect";
import Committee from "./pages/Committee";
import Departments from "./pages/Departments";
import Placements from "./pages/Placements";
import YearPlacements from "./pages/YearPlacements";
import GITSAlumniForum from "./pages/GITSAlumniForum";
import ExtraPage from "./pages/ExtraPage";

const AllRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="w-full min-h-screen h-auto">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/why-gits" element={<WhyGits />} />
        <Route exact path="/vision-mission" element={<VisionAndMission />} />
        <Route
          exact
          path="/management-team/:management"
          element={<ManagementTeamsMessage />}
        />

        <Route
          exact
          path="/institutions-innovation-council"
          element={<InstitutionsInnovationCouncil />}
        />
        <Route exact path="/iqac" element={<IQAC />} />

        <Route
          exact
          path="/admission/:department"
          element={<SubjectAdmission />}
        />
        <Route exact path="/hostel" element={<Hostel />} />
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
        <Route exact path="/cdc" element={<CDC />} />
        <Route
          exact
          path="/entrepreneurship-cell"
          element={<EnterpreneurshipCell />}
        />
        <Route exact path="/training-partners" element={<TrainingPartners />} />
        <Route
          exact
          path="/assessment-partners"
          element={<AssessmentPartners />}
        />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blogs/:slug" element={<BlogIdPage />} />
        <Route exact path="/contact-us" element={<Contact />} />

        {/* TODO */}
        <Route exact path="/placements" element={<Placements />} />
        <Route exact path="/placements/:year" element={<YearPlacements />} />
        <Route exact path="/gits-alumni-forum" element={<GITSAlumniForum />} />
        <Route exact path="/departments" element={<Departments />} />
        <Route
          exact
          path="/curricular-aspects"
          element={<CurricularAspect />}
        />
        <Route exact path="/committee/:committee" element={<Committee />} />

        <Route exact path="/:id" element={<ExtraPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
