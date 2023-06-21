import {useEffect} from 'react'
import { useSelector } from "react-redux";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const AllEventCard = ({data}) => {
    const { title, description,date,time,location,createdAt } = data;
  return (
    <>
    <div className="card" id="event_card">
    <h5 className="card-header">{data._id}</h5>
      <div className="card-body">
        <h3 className="card-title"><span style={{fontWeight:"bolder"}}>Title :</span> {title}</h3>
        <h4 style={{fontWeight:"bolder"}}>Description:</h4>
        <p className="card-text">{description}</p>
        <p><span style={{fontWeight:"bolder"}}>Date :</span> {date}</p>
        <p><span style={{fontWeight:"bolder"}}>time :</span> {time}</p>
        <p><span style={{fontWeight:"bolder"}}>Location: </span> {location}</p>
      </div>
      <div className="card_buttons_list">
          
      </div>
      <h6 className="card-footer">
        {/* {createdAt} */}
        {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
      </h6>
    </div>
  </>
  )
}

export default AllEventCard