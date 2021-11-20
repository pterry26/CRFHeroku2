import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Choices from './components/Choices'
import StoredActivities from './components/StoredActivities'
import DeleteActivities from './components/DeleteActivities'
import activityService from './services/activities'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  const [activities, setActivities] = useState([])

  const handleNewActivity = () => {
    console.log('button!');
  }

  useEffect(() => {
    activityService
      .getAllActivities()
      .then(data => {
        setActivities(data.activities)
      })
  }, [])

  const handleAddActivity = newActivity => {
    activityService
      .addActivity({
        activity: newActivity,
      })
      .then(() => {
        setActivities([...activities, {activity: newActivity}])
      })
  }

  const handleDeleteActivities = () => {
    activityService
      .deleteAllActivities()
      .then(() => {
        setActivities([])
      })
  }

  return (
    <div className='container'>
      <Container>
        <h1> AAAAAHHHH</h1>
        <Row id="first-row">
          <Col>
            <Header/>
          </Col>
        </Row>
        <Row id="second-row">
          <Col> 
            <Choices handleNewActivity={handleNewActivity} handleAddActivity={handleAddActivity} name={'Hello'}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <h2>Today's Activities: {activities.length}</h2>
              <StoredActivities list={activities} />
            </ul>
          </Col>
        </Row>
        <Row id="fourth-row">
          <Col>
            <DeleteActivities handleDeleteActivities={handleDeleteActivities} />
          </Col>
        </Row>
      </Container>
    </div>
    
  );
}

export default App;
