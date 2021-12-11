import React from "react";
import "./Header.style.scss";
import { Layout, Input, Space, Avatar, Badge } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const { Header } = Layout;
const { Search } = Input;

const CustomHeader = () => {
  return (
    <div>
      <Header className="site-layout-background" style={{ height: 70 }}>
        <Space direction="horizontal">
          <Search placeholder="Search Ideas" size="large" enterButton />
        </Space>

        <Avatar
          icon={<UserOutlined style={{ color: "var(--white)" }} />}
          style={{
            float: "right",
            marginTop: "11px",
            backgroundColor: "var(--primary-color)",
          }}
          size={45}
        />
        <Badge size="default" count={5} className="notificationIcon">
          <FontAwesomeIcon
            icon={faBell}
            stye={{ fontSize: "700px", float: "right" }}
          />
        </Badge>
      </Header>
    </div>
  );
};

export default CustomHeader;
