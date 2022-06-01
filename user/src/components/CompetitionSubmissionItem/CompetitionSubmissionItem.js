import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CompetitionSubmissionItem.scss";
import { List, Avatar, Button, message } from "antd";
import { useSelector } from "react-redux";

const CompetitionSubmissionItem = (props) => {
  let navigate = useNavigate();

  // console.log(props.requestID.requestid , "What is this")
  //   const userId = useSelector(
  //     (state) => state.userDetails.userid
  //   )
  //   console.log(userId)
  //   const [mySubmissions, setMySubmissions] = useState([])

  // useEffect(() => {

  // fetchingAllSubmissions()
  // console.log(mySubmissions)
  // }, [])

  //   const fetchingAllSubmissions = async ()=>{
  // let response = await fetch(`http://localhost:5000/requests/getallyoursubmissions/${userId}/${props.requestID.requestid}`)
  // setMySubmissions(await response.json())

  // }
  //   const moveToMyRequests = () => {
  //     navigate("/myrequests");
  //   };

  let data = [
    {
      id: 0,
      title: "Ant Design Title 1",
      description: "Answer of competition",
      isHired: false,
    },
    {
      id: 1,
      title: "Ant Design Title 2",
      description: "Answer of competition",
      isHired: false,
    },
    {
      id: 2,
      title: "Ant Design Title 3",
      description: "Answer of competition",
      isHired: false,
    },
    {
      id: 3,
      title: "Ant Design Title 4",
      description: "Answer of competition",
      isHired: false,
    },
  ];

  // const info = async (requestedby, submittedby, requestid, postid) => {
  //data[id].isHired = true;

  //   let response = await fetch(
  //     `http://localhost:5000/requests/sendinghiringmail`,
  //     {
  //       // Adding method type
  //       method: "POST",

  //       // Adding body or contents to send
  //       body: JSON.stringify(
  //         {requestedby,submittedby,requestid,postid}

  //       ),

  //       // Adding headers to the request
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     }
  //   );
  //   response = await response.json()
  //   console.log(response)

  //   message.success("Hired! Details Shared via Email");
  //   moveToMyRequests();
  // };
  return (
    <div className="competitionSubmissionItemLayout">
      <div>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              {/* TODO: Replace Image with user image */}
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={item.title}
                description={item.description}
              />
              {/* {console.log(item.requestid)} */}
              <Button
                type="primary"
                shape="round"
                // onClick={() =>
                //   info(
                //     item.userid,
                //     item.submitted_by,
                //     item.submission_id,
                //     item.requestid
                //   )
                // }
              >
                Send Rewards
              </Button>
            </List.Item>
          )}
        />
      </div>
      <div></div>
    </div>
  );
};
export default CompetitionSubmissionItem;
