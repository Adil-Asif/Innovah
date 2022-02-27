import React, { useState } from "react";
import "./Modals_Sign.scss";
import { Modal, Button, Form } from "antd";
import Input from "../Input/Input";

const LoginModals = (props) => {
  console.log(props);
  let currentTitle = props.title +" to Innovah"
  const [isModalVisible, setIsModalVisible] = useState("");
  const [emailInput, setEmail] = useState(false);
  const [passwordInput, setPassword] = useState("");
  const [typeOfLogin,setTypeOfLogin] = useState(props.typeOfLogin)

  const handleEmailInput = (emailValue) => {
    setEmail(emailValue);
    console.log(emailInput);
  };
  const handlePasswordInput = (passwordValue) => {
    setPassword(passwordValue);
    console.log(passwordInput);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="signInLayout">

        <Button type="primary" onClick={() => setIsModalVisible(true)}>
        {props.title}
      </Button>

      {typeOfLogin ?
      <Modal
        title= {currentTitle}
        centered
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
         
          label="Emai:"
            name="emailInput"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
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
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
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
            <Button id="Submit_button" type="primary" htmlType="submit">
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
      </Modal> : <Modal
        title= {currentTitle}
        centered
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form
          name="basic"
          labelCol={{
            span: 7,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
         
          label="Emai:"
            name="emailInput"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
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
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
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
            label="Re-Enter Password"
            name="Repassword"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input
              type="password"
              id="Repassword"
              label="Re-Enter Password"
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
            <Button id="Submit_button" type="primary" htmlType="submit">
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
      </Modal> }

      
    </div>
  );
};

export default LoginModals;
