import React from "react";
import "./AddIdeaPage.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Layout, Form, Input, Button, Select, Switch } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AddIdea from "../../assests/Images/AddIdea.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
const { Content } = Layout;
const { Option } = Select;

const AddIdeaPage = () => {
  return (
    <div className="addIdeaPage">
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout" data-theme="dark">
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <div className="titleSection">
              <div className="pageTitle">
                <PageTitle title="Add Idea" />
              </div>
              <img src={AddIdea} alt="Add Idea" />
            </div>
            <div className="addIdeaForm">
              <Form
                labelCol={{
                  span: 4,
                }}
                wrapperCol={{
                  span: 14,
                }}
                layout="horizontal"
              >
                <Form.Item label="Idea Title">
                  <Input />
                </Form.Item>
                <Form.Item label="Description">
                  <Input />
                </Form.Item>
                <Form.Item label="Idea Tags">
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: "100%" }}
                    placeholder="Please select the relevant tags that belong to your idea"
                  >
                    <Option value=" WebDevelopment" label="WebDevelopment">
                      Web Development
                    </Option>
                    <Option value="AppDevelopment" label="AppDevelopment">
                      App Development
                    </Option>
                    <Option value="DataScience" label="DataScience">
                      Data Science
                    </Option>
                    <Option value="Innovation" label="Innovation">
                      Innovation
                    </Option>
                    <Option value="Health" label="Health">
                      Health
                    </Option>
                    <Option value="FoodChain" label="FoodChain">
                      Food Chain
                    </Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Idea Tags">
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: "100%" }}
                    placeholder="Please select the relevant industry your idea belong to"
                  >
                    <Option value=" Technology" label="Technology">
                      Technology
                    </Option>
                    <Option value="Health" label="Health">
                      Health
                    </Option>
                    <Option value="Environment" label="Environment">
                      Environment
                    </Option>
                    <Option value="Construction" label="Construction">
                      Construction
                    </Option>
                    <Option value="Tourism" label="Tourism">
                      Tourism
                    </Option>
                    <Option value="Food" label="Food">
                      Food
                    </Option>
                    <Option value="Other" label="Other">
                      Other
                    </Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Final Deliverables">
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: "100%" }}
                    placeholder="Please select the relevant Final Deliverables you will provide"
                  >
                    <Option value=" SRS" label="SRS">
                      SRS
                    </Option>
                    <Option value="SDS" label="SDS">
                      SDS
                    </Option>
                    <Option value="UserManual" label="UserManual">
                      User Manual
                    </Option>
                    <Option value="Product" label="Product">
                      Product
                    </Option>
                    <Option value="TestingDocuments" label="TestingDocuments">
                      Testing Documents
                    </Option>
                    <Option value="Contracts" label="Contracts">
                      Contracts
                    </Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Attach Image">
                  <Button>
                    <FontAwesomeIcon icon={faPaperclip} />
                    Attach
                  </Button>
                </Form.Item>
                <Form.Item label="Make Private" valuePropName="checked">
                  <Switch />
                </Form.Item>
              </Form>
              <div className="submit">
                <Button
                  type="primary"
                  style={{
                    borderRadius: "8px",
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};

export default AddIdeaPage;
