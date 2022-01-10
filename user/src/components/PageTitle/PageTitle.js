import React from "react";

import "./PageTitle.style.scss";

const PageTitle = (props) => {
  return <div className="pageHeading">{props.title}</div>;
};
export default PageTitle;
