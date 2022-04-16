import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RequestsItem.scss";
import { storage } from "../../services/Firebase/Firebase";
import { Modal, Button, Form, Input, Upload } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faUpload } from "@fortawesome/free-solid-svg-icons";
const { TextArea } = Input;

const RequestsItem = (props) => {
  let navigate = useNavigate();
  const moveToRequestSubmissions = () => {
    navigate("/myrequests/submissions");
  };

  let request = {
    requestID: "",
    requestName: props.RequestName,
    requestDescription: props.description,
    requestImage: props.imageUrl,
    isUpdated: false,
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
    const funct = () => {
      if (imageAsFile !== "") {
        handleFireBaseUpload();
      }
    };
    funct();
  }, [imageAsFile]);

  useEffect(() => {
    if (imageAsUrl.imgUrl !== "") {
      request.requestImage = imageAsUrl.imgUrl;
      request.isUpdated = true;
      setRequestDetails(request);
    }
  }, [imageAsUrl]);

  useEffect(() => {
    if (requestDetails.isUpdated) {
      console.log(requestDetails);
    }
  }, [requestDetails]);
  useEffect(() => {
    if (Proposal !== "") {
      console.log("Received values of form: ", Proposal);
    }
  },[Proposal]);
  const onApply = (values) => {
    setProposal(values.Proposal);
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

    requestDetails.requestImage =
      values.requestImage !== undefined
        ? (values.requestImage, handleSubmission(values.requestImage))
        : ((requestDetails.requestImage = request.requestImage),
          (request.isUpdated = true),
          setRequestDetails(request));
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
        centered
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
            <FontAwesomeIcon icon={faFileLines} />
            {props.applications}
          </div>
        </div>
      </div>
      {props.isHired ? (
        <div className="hired">Hired</div>
      ) : (
        <>
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
          </Button>{" "}
        </>
      )}
      <Modal
        centered
        className="editRequestModal"
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
      >
        <div className="editRequestForm">
          <Form form={form}>
            <div>
              <Form.Item
                name="requestName"
                label="Request Tile"
                rules={[{ message: "Previous title will be used" }]}
              >
                <Input defaultValue={requestDetails.requestName} />
              </Form.Item>
              <Form.Item name="requestDescription" label="Request Description">
                <TextArea
                  defaultValue={requestDetails.requestDescription}
                  showCount
                  maxLength={3000}
                />
              </Form.Item>
              <Form.Item name="requestImage">
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
                    icon={<FontAwesomeIcon icon={faUpload} className="icon" />}
                  >
                    Upload Image
                  </Button>
                </Upload.Dragger>
              </Form.Item>
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default RequestsItem;
