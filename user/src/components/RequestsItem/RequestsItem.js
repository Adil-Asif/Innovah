import { React, useState } from "react";
import "./RequestsItem.scss";
import { Modal, Button, Form, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faEye,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
const { TextArea } = Input;

const RequestsItem = (props) => {

  const [Proposal ,setProposal] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const onSubmit = (values) => {
    setProposal(values.Proposal)
    console.log("Received values of form: ", Proposal);
    setIsModalVisible(false);
  };

  return props.global ? (
    <div className="requestItemGlobal">
      <div className="img">
        <img src={props.imageUrl} alt={props.title} />
      </div>
      <div className="information">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
      </div>
      <Button
        type="primary"
        className="left"
        style={{ marginRight: "4%", borderRadius: "8px" }}
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        Apply
      </Button>

      <Modal
        title={props.title}
        visible={isModalVisible}
        okText="Submit"
        cancelText="Cancel"
        onCancel={() => {
          setIsModalVisible(false);
        }}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onSubmit(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        className="requestSubmissionForm"
      >
        <div className="requestForm">
          <div>
            <h3>Description: </h3>
            <p>{props.description}</p>
          </div>
          <div>
            <Form form={form}>
              <div>
                <h3>Proposal</h3>
                <ul>
                  <li>Brief description about yourself</li>
                  <li>What makes you fit for this role</li>
                  <li>What will you bring to the team</li>
                  <li>Monthly remuneration till project completion</li>
                </ul>
              </div>
              <Form.Item
                name="Proposal"
                rules={[
                  { required: true, message: "Please enter your proposal" },
                ]}
              >
                <TextArea
                  showCount
                  maxLength={3000}
                  placeholder="Enter your proposal"
                />
              </Form.Item>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  ) : (
    <div className="requestItemLayoutLocal">
      <img src={props.imageUrl} alt={props.RequestName} />
      <div className="information">
        <div className="title">{props.RequestName}</div>
        <div className="description">{props.description}</div>
        <div className="insights">
          <div className="details">
            <FontAwesomeIcon icon={faThumbsUp} className="icon" />
            {props.likes}
          </div>
          <div className="details">
            <FontAwesomeIcon icon={faEye} className="icon" />
            {props.views}
          </div>
          <div className="details">
            <FontAwesomeIcon icon={faComment} />
            {props.comments}
          </div>
        </div>
      </div>
      <Button
        type="primary"
        className="left"
        style={{ marginRight: "4%", borderBottomLeftRadius: "8px" }}
      >
        Edit
      </Button>
      <Button
        type="primary"
        className="right"
        style={{
          borderBottomRightRadius: "8px",
        }}
      >
        View Submissions
      </Button>
    </div>
  );
};

export default RequestsItem;
