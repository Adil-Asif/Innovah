import "./Sidebar.style.scss";
import Logo from "../../assests/Images/Logo.png";
import { Layout, Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCircle } from "@fortawesome/free-solid-svg-icons";
import DashboardIcon from "../../assests/Images/Icons/Dashboard.png";
import IdeaIcon from "../../assests/Images/Icons/Idea.png";
import RequestIcon from "../../assests/Images/Icons/Request.png";
import LearnigResourcesIcon from "../../assests/Images/Icons/LearningResources.png";
import ProjectManagementIcon from "../../assests/Images/Icons/ProjectManagement.png";
import CompetitionIcon from "../../assests/Images/Icons/Competition.png";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;
const { SubMenu } = Menu;




const Sidebar = (props) => {
  let navigate = useNavigate();
const projectManagementpage =()=>{
  navigate('/projectmanagement/')
} 
const moveToAddIdea = ()=>{
  navigate('/ideas/addidea')
}
const moveToMyIdeas=()=>{
navigate('/ideas/myideas')
}
const moveToGlobalIdeas=()=>{
  navigate('/ideas/globalideas')
  }
  const navigatetoIdeaspage=()=>{
    navigate('/ideas')
  }
const navigatetoLearningResources=()=>{
navigate("/learningresources")
}
  return (
    <div   className="siderLayout">
      <Sider className="siderLayout">
        <div>
          <img alt="LOGO" src={Logo} className="Logo" />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={[props.PageKey]}
          mode="inline"
          className="menu"
        >
          <Menu.Item
            className="antTitle"
            key="1"
            icon={
              <img
                alt="Dashboard Icon"
                src={DashboardIcon}
                className="customIcon dashboardIcon"
              />
            }
          >
            Dashboard
          </Menu.Item>
          <SubMenu onTitleClick={()=>{navigatetoIdeaspage()}}
            key="sub1"
            className="antTitle"
            icon={<img alt="Idea Icon" src={IdeaIcon} className="customIcon" />}
            title="Ideas"
          >
            <Menu.Item onClick={()=>{moveToAddIdea()}}
              key="2"
              icon={
                <FontAwesomeIcon
                  icon={faPlus}
                  className="fontAwesomePlusIcon customIcon"
                />
              }
            >
              Add Idea
            </Menu.Item>
            <Menu.Item
            onClick={()=>{moveToMyIdeas()}}
              key="3"
              icon={<FontAwesomeIcon icon={faCircle} className="customIcon" />}
            >
              My Ideas
            </Menu.Item>
            <Menu.Item onClick={()=>{moveToGlobalIdeas()}}
              key="4"
              icon={<FontAwesomeIcon icon={faCircle} className="customIcon" />}
            >
              All Ideas
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            className="antTitle"
            icon={
              <img
                alt="Request Icon"
                src={RequestIcon}
                className="customIcon"
              />
            }
            title="Requests"
          >
            <Menu.Item
              key="5"
              icon={
                <FontAwesomeIcon
                  icon={faPlus}
                  className="fontAwesomePlusIcon customIcon"
                />
              }
            >
              Post Request
            </Menu.Item>
            <Menu.Item
              key="6"
              icon={<FontAwesomeIcon icon={faCircle} className="customIcon" />}
            >
              My Requests
            </Menu.Item>
            <Menu.Item
              key="7"
              icon={<FontAwesomeIcon icon={faCircle} className="customIcon" />}
            >
              All Requests
            </Menu.Item>
          </SubMenu>
          <Menu.Item
          onClick={()=>{navigatetoLearningResources()}}
            key="8"
            className="extraMargin antTitle"
            icon={
              <img
                alt="Learning Resources Icon"
                src={LearnigResourcesIcon}
                className="customIcon"
              />
            }
          >
            Learning
            <br />
            Resources
          </Menu.Item>
          <Menu.Item onClick={()=>{projectManagementpage()}}
            className="antTitle"
            key="9"
            icon={
              <img
                alt="Project Management Icon"
                src={ProjectManagementIcon}
                className="customIcon"
              />
            }
          >
            Project Management
          </Menu.Item>
          <Menu.Item
            className="antTitle"
            key="10"
            icon={
              <img
                alt="Competition Icon"
                src={CompetitionIcon}
                className="customIcon"
              />
            }
          >
            Competitions
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
};

export default Sidebar;
