import React, { useState } from 'react'
import StandingScreen from './StandingScreen';

const ResultScreen = () => {

  const [showStandings, setShowStandings] = useState(true);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <button className="btn btn-primary" onClick={() => setShowStandings(true)} disabled={showStandings}>Standings</button>
        <button className="btn btn-primary" onClick={() => setShowStandings(false)} disabled={!showStandings}>Results</button>
      </div>
      {showStandings ? <StandingScreen /> : "Results Page"}
    </>
  )
}

export default ResultScreen