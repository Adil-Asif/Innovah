import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../views/HomePage/HomePage";
import SignUp from "../views/SignUp/SignUp";
import MyIdeasPage from "../views/MyIdeasPage/MyIdeasPage";
import AddIdeaPage from "../views/AddIdeaPage/AddIdeaPage";
import GlobalIdeasPage from "../views/GlobalIdeasPage/GlobalIdeasPage";
import ViewIdeasPage from "../views/ViewIdeasPage/ViewIdeasPage";
import AddRequestPage from "../views/AddRequestPage/AddRequestPage";
import ViewRequestsPage from "../views/ViewRequestsPage/ViewRequestsPage";
import GlobalRequestsPage from "../views/GlobalRequestsPage/GlobalRequestsPage";
import LearningResourcesPage from "../views/LearningResourcesPage/LearningResourcesPage";
import PLayListPage from "../views/PlaylistPage/PlaylistPage";
import LectureVideoPage from "../views/LectureVideoPage/LectureVideoPage";
import ProjectManagement from "../views/ProjectManagement/ProjectManagement";
import SpecificProject from "../views/ProjectManagement/SpecificProject";
import WorkItems from "../views/ProjectManagement/WorkITems";
import InventoryManagement from "../views/ProjectManagement/InventoryManagement";
import CompetitionPage from "../views/CompetitionPage/CompetitionPage";
import RewardPage from "../views/RewardPage/RewardPage";

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/register" element={<SignUp />} />
      <Route exact path="/addidea" element={<AddIdeaPage />} />
      <Route exact path="/myideas" element={<MyIdeasPage />} />
      <Route exact path="myideas/idea" element={<ViewIdeasPage />} />
      <Route exact path="/globalideas" element={<GlobalIdeasPage />} />
      <Route exact path="/addrequest" element={<AddRequestPage />} />
      <Route exact path="/myrequests/request" element={<ViewRequestsPage />} />
      <Route exact path="/globalrequests" element={<GlobalRequestsPage />} />
      <Route
        exact
        path="/learningresources"
        element={<LearningResourcesPage />}
      />
      <Route
        exact
        path="/learningresources/playlist"
        element={<PLayListPage />}
      />
      <Route
        exact
        path="/learningresources/video"
        element={<LectureVideoPage />}
      />
      <Route exact path="/projectmanagement" element={<ProjectManagement />} />
      <Route
        exact
        path="/projectmanagement/specificproject"
        element={<SpecificProject />}
      />
      <Route
        exact
        path="/projectmanagement/specificproject/workItems"
        element={<WorkItems />}
      />
      <Route
        exact
        path="/projectmanagement/specificproject/Inventory"
        element={<InventoryManagement />}
      />
      <Route exacr path="/competitons" element={<CompetitionPage />} />
      <Route exact path="/rewards" element={<RewardPage />} />
    </Routes>
  );
};

export default Routers;
