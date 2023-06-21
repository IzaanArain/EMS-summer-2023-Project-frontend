import {Fragment} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getEventsAsync } from '../Features/Events/EventSlice'
import EventCard from './EventCard'

const CardList = () => {
  const events=useSelector((state)=>state.events)
  const {user}=useSelector((state)=>state.auth)
  const dispatch=useDispatch()
  // console.log(events)

  useEffect(()=>{
    if(user){
      dispatch(getEventsAsync())
    }
  },[dispatch])
  return (
    <>
    <h5 style={{textAlign:"center"}}>Event List</h5>
   <div className="scrollable">
   <div id="card_list">
    {
      events.map((val)=>{
        return(
          <Fragment key={val._id}>
            <EventCard data={val}/>
          </Fragment>
        )
      })
    }
    </div>
   </div>
    </>
  )
}

export default CardList