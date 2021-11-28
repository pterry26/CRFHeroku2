import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import RaceTable from './components/RaceTable'
import raceService from './services/raceService'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  const [races, setRaces] = useState([])

  useEffect(() => {
    raceService.getRaces({distance: '5K'}).then(data => {
      console.log(data);
      setRaces(data.races);
    })
  }, [])

  return (
    <div className='container'>
      <Container>
        <Row id="first-row">
          <Col>
            <Header/>
          </Col>
        </Row>
        <Row>
          <Col>
            <RaceTable list={races} />
          </Col>
        </Row>
      </Container>
    </div>
    
  );
}

export default App;
