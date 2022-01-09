import React, { useState } from "react";
import "./HomePage.style.scss";
import { Modal, Button, Form } from "antd";
import Input from "../../components/Input/Input";

const HomePage = () => {
  const [isModalVisible, setIsModalVisible] = useState("");
  const [emailInput, setEmail] = useState(false);
  const [passwordInput, setPassword] = useState("");

  const handleEmailInput = (emailValue) => {
    setEmail(emailValue);
    console.log(emailInput);
  };
  const handlePasswordInput = (passwordValue) => {
    setPassword(passwordValue);
    console.log(passwordInput);
  };
  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };
  return (
    <div>
      <Button type="primary" onClick={() => setIsModalVisible(true)}>
        Login
      </Button>
      <Modal
        title="Sign in to Innovah"
        centered
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="emailInput"
            // rules={[
            //   {
            //     required: true,
            //     message: "Please input your username!",
            //   },
            // ]}
          >
            <Input
              type="email"
              id="email"
              label="Email Address"
              parentCallback={handleEmailInput}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            // rules={[
            //   {
            //     required: true,
            //     message: "Please input your password!",
            //   },
            // ]}
          >
            <Input
              type="password"
              id="password"
              label="Password"
              //pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])"
              parentCallback={handlePasswordInput}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        {/* <div>
          <Input type="text" />
          <input type="text" required />
        </div> */}
        {/* <p>some contents...</p>
        <p>some contents...</p> */}
      </Modal>
    </div>
  );
};

export default HomePage;
