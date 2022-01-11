import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../views/HomePage/HomePage";
import SignUp from "../views/SignUp/SignUp";
import GlobalIdeasPage from "../views/GlobalIdeasPage/GlobalIdeasPage";
import MyIdeasPage from "../views/MyIdeasPage/MyIdeasPage";
import ProjectManagement from "../views/ProjectManagement/ProjectManagement";
import SpecificProject from "../views/ProjectManagement/SpecificProject";
import WorkItems from "../views/ProjectManagement/WorkITems";
import InventoryManagement from "../views/ProjectManagement/InventoryManagement";
import AddIdeaPage from "../views/AddIdeaPage/AddIdeaPage";
import ViewIdeasPage from "../views/ViewIdeasPage/ViewIdeasPage";
import LearningResourcesPage from "../views/LearningResourcesPage/LearningResourcesPage";
import ConnectionsPageView from "../views/ConnectionsPage/ConnectionsPageView";


const Routers = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/signup" element={<SignUp/>}/>
            <Route exact path="/projectmanagement"   element={<ProjectManagement/>} />
            <Route exact path="/projectmanagement/specificproject"   element={<SpecificProject/>} />
            <Route exact path="/projectmanagement/specificproject/workItems"   element={<WorkItems/>} />
            <Route exact path="/projectmanagement/specificproject/Inventory"   element={<InventoryManagement/>} />
            <Route exact path="/ideas/addidea"   element={<AddIdeaPage/>} />
            <Route exact path="/ideas/myideas" element={<MyIdeasPage/>}/>
            <Route exact path="/ideas/globalideas" element={<GlobalIdeasPage/>}/>
            <Route exact path="/ideas" element={<ViewIdeasPage/>}/>   
            <Route exact path="/learningresources" element={<LearningResourcesPage/>}/>   
           
            
        </Routes>
    )
}

export default Routers;