import React from "react";
import "./Header.scss";
import { Layout, Input, Space, Avatar, Badge , Button} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Logo from "./../../assests/Images/Logo.png"
import LoginModals from "../SignIn&signupButtons/Modals_Sign";
const { Header } = Layout;
const { Search } = Input;

const SignUpHeaderDetails = () => {
  return (
    <div className="signUpLayout">
      <Header className="site-layout-background">
        <Space direction="horizontal">
            <img id="Logo_Image" src={Logo} alt="Logo of organisation" />
          {/* <Search placeholder="Search Ideas" size="large" enterButton /> */}
        </Space>
       
      
      </Header>
    </div>
  );
};

export default SignUpHeaderDetails;
