import React from 'react'
import CardList from '../Components/CardList'
import AddForm from '../Components/AddForm'

const Dashboard = () => {
  return (
    <>
    <div className="dashboardPage">
    {/* <h2>Dashboard</h2> */}
    <div id='dashboard'>
    <section id='add-form-section'>
      <AddForm/>
    </section>
    <section id='card-section'><CardList/></section>
    </div>
    </div>
    </>
  )
}

export default Dashboard