import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { useSelector } from "react-redux";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
const EventCard = ({ data }) => {
  const {user}=useSelector((state)=>state.auth)
  const { title, description,date,time,location,createdAt } = data;
  return (
    <>
      <div className="card" id="event_card">
      <h3 className="card-header"><span style={{fontWeight:"bolder"}}>Name :</span> {user.fname} {user.lname}</h3>
      {/* <h5>{data._id}</h5> */}
        <div className="card-body">
          <h3 className="card-title"><span style={{fontWeight:"bolder"}}>Title :</span> {title}</h3>
          <h4 style={{fontWeight:"bolder"}}>Description:</h4>
          <p className="card-text">{description}</p>
          <p><span style={{fontWeight:"bolder"}}>Date :</span> {date}</p>
          <p><span style={{fontWeight:"bolder"}}>time :</span> {time}</p>
          <p><span style={{fontWeight:"bolder"}}>Location: </span> {location}</p>
        </div>
        <div className="card_buttons_list">
            {/* <button className="btn btn-outline-secondary" id="card_button">edit</button>
            <button className="btn btn-outline-danger" id="card_button">Delete</button> */}
            <DeleteButton data={data}/>
            <EditButton data={data}/>
        </div>
        <h6 className="card-footer">
          {/* {createdAt} */}
          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </h6>
      </div>
    </>
  );
};

export default EventCard;
