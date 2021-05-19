import React from "react";
const FundCard = (props) => {
  return (
    <>
      <div className="WhoweHelp_box">
        <p className="WhoweHelp_text">{props.title}</p>
        <div className="WhoweHelp_box">
          <div className="WhoweHelp_boxText">
            <h1>
              {props.name}
              <br />
              <p>{props.nameTwo}</p>
            </h1>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
      {/* <div className="WhoweHelp_link">
        <Link to={props.path}>{props.id}</Link>
      </div> */}
    </>
  );
};

export default FundCard;
