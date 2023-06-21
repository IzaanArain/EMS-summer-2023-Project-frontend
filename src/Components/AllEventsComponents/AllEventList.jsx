import {Fragment,useEffect} from 'react'
import AllEventCard from './AllEventCard'
import { useSelector,useDispatch } from 'react-redux'
import { getAllEventsAsync } from '../../Features/Events/AllEventSlice'

const AllEventList = () => {
  const {user}=useSelector((state)=>state.auth)
    const {allEvents}=useSelector((state)=>state.allEvents)
    console.log("all events",allEvents)
    const dispatch=useDispatch()

    useEffect(()=>{
      if(user){
        dispatch(getAllEventsAsync())
      }
    },[dispatch])
  return (
    <>
    <div id="allEventList">
        {/* <h1>these are all events</h1> */}
        <div id="card_list">
        {allEvents.map((val,index)=>{
            return(
                <Fragment key={val._id}>
                <AllEventCard data={val} index={index}/>
                </Fragment>
            )
        })}
        </div>
    </div>
    </>
  )
}

export default AllEventList