import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RequestsItem.scss";
import { storage } from "../../services/Firebase/Firebase";
import { Modal, Button, Form, Input, Upload } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faEye,
  faComment,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
const { TextArea } = Input;

const RequestsItem = (props) => {
  let navigate = useNavigate();
  const moveToRequestSubmissions = () => {
    navigate("/myrequests/submissions");
  };

  let request = {
    requestName: props.RequestName,
    requestDescription: props.description,
    requestImage: props.imageUrl,
  };
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  const [Proposal, setProposal] = useState("");
  const [requestDetails, setRequestDetails] = useState(request);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
    setIsModalVisible(false);
  }, [requestDetails, form]);

  useEffect(() => {
    const funct = async () => {
      if (imageAsFile !== "") {
        await handleFireBaseUpload();
      }
    };
    funct();
  }, [imageAsFile]);

  useEffect(() => {
    if (imageAsUrl.imgUrl !== "") {
      console.log(imageAsUrl, "j");
    }
  }, [imageAsUrl]);

  const onApply = (values) => {
    setProposal(values.Proposal);
    console.log("Received values of form: ", Proposal);
    setIsModalVisible(false);
  };
  const onEdit = (values) => {
    request.requestName =
      values.requestName !== undefined
        ? values.requestName
        : requestDetails.requestName;
    request.requestDescription =
      values.requestDescription !== undefined
        ? values.requestDescription
        : requestDetails.requestDescription;
    request.requestImage =
      values.requestImage !== undefined
        ? (values.requestImage, handleSubmission(values.requestImage))
        : requestDetails.requestImage;
    setRequestDetails(request);
  };
  const handleSubmission = async (requestImage) => {
    setImageAsFile(requestImage.file);
  };
  const handleFireBaseUpload = () => {
    console.log("start of upload");
    // async magic goes here...
    console.log(imageAsFile);
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }

    if (imageAsFile !== undefined) {
      const uploadTask = storage
        .ref(`/images/${imageAsFile.name}`)
        .put(imageAsFile);
      //initiates the firebase side uploading
      uploadTask.on(
        "state_changed",
        (snapShot) => {
          //takes a snap shot of the process as it is happening
          console.log(snapShot);
        },
        (err) => {
          //catches the errors
          console.log(err);
        },
        () => {
          // gets the functions from storage refences the image storage in firebase by the children
          // gets the download url then sets the image from firebase as the value for the imgUrl key:
          // TODO: Reolve issue returns url on second submit look for solution. Issue with promise
          storage
            .ref("images")
            .child(imageAsFile.name)
            .getDownloadURL()
            .then(async (fireBaseUrl) => {
              if (fireBaseUrl !== "") {
                setImageAsUrl((prevObject) => ({
                  ...prevObject,
                  imgUrl: fireBaseUrl,
                }));
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      );
    }
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
              onApply(values);
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
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        Edit
      </Button>
      <Button
        onClick={() => {
          moveToRequestSubmissions();
        }}
        type="primary"
        className="right"
        style={{
          borderBottomRightRadius: "8px",
        }}
      >
        View Submissions
      </Button>

      <Modal
        centered
        title={props.RequestName}
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
              onEdit(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        className="requestSubmissionForm"
      >
        <div className="requestForm">
          <div>
            {/* <h3>Description: </h3>
            <p>{props.description}</p> */}
          </div>
          <div>
            <Form form={form}>
              <div>
                <Form.Item
                  name="requestName"
                  label="Request Tile"
                  rules={[{ message: "Previous title will be used" }]}
                >
                  <Input defaultValue={requestDetails.requestName} />
                </Form.Item>
                <Form.Item
                  name="requestDescription"
                  label="Request Description"
                >
                  <TextArea defaultValue={requestDetails.requestDescription} />
                </Form.Item>
                <Form.Item name="requestImage" label="Image Url">
                  <Upload.Dragger
                    listType="picture"
                    accept=".png,.jpg"
                    defaultFileList={""}
                    beforeUpload={(file) => {
                      console.log({ file });
                      return false;
                    }}
                    action={"localhost:3000/"}
                  >
                    <Button
                      icon={
                        <FontAwesomeIcon icon={faUpload} className="icon" />
                      }
                    >
                      Upload
                    </Button>
                  </Upload.Dragger>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RequestsItem;
