import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CompetitionSubmissionItem.scss";
import { List, Avatar, Button, message } from "antd";
import { useSelector } from "react-redux";

const CompetitionSubmissionItem = (props) => {
  let navigate = useNavigate();
console.log(props.competition)
  // console.log(props.requestID.requestid , "What is this")
  //   const userId = useSelector(
  //     (state) => state.userDetails.userid
  //   )
  //   console.log(userId)
    const [mySubmissions, setMySubmissions] = useState([])

  useEffect(() => {

  fetchingAllSubmissions()
  console.log(mySubmissions)
  }, [])

    const fetchingAllSubmissions = async ()=>{
  let response = await fetch(`http://localhost:5000/competitions/getAllsubmissions/${props.competition}`)
  setMySubmissions(await response.json())

  }

  console.log(mySubmissions)
    const moveToCompetitions = () => {
      navigate("/competitons");
    };

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

  const info = async (submissionID, userid,compName) => {

    let response = await fetch(
      `http://localhost:5000/competitions//addingpoints`,
      {
        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify(
          {submissionID,userid,compName}

        ),

        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    response = await response.json()
    console.log(response)
    
    message.success("Congrats! points added in users profile");
    moveToCompetitions()
    
  };
  return (
    <div className="competitionSubmissionItemLayout">
      <div>
        <List
          itemLayout="horizontal"
          dataSource={mySubmissions}
          renderItem={(item) => (
            <List.Item>
              {/* TODO: Replace Image with user image */}
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={`Submission ID: ${item.submissionID}`}
                description={item.description}
              />
            
              <Button
                type="primary"
                shape="round"
                onClick={() =>
                  info(
                    item.submissionID,
                    item.userid,
                    item.competitionname
                  )
                }
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
