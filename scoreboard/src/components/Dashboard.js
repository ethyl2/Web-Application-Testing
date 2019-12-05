import React from 'react';

const Dashboard = ({quarter, setQuarter, handleBall, handleStrike, handleFoul, handleHit}) => {

    return (
        <section className="buttons">

        <div className="homeButtons">
         
          <button
            onClick={handleHit}
            className="homeButtons__touchdown"
          >
            Hit
          </button>

          <button
            onClick={handleStrike}
            className="homeButtons__fieldGoal"
          >
            Strike
          </button>

          <button
            onClick={handleBall}
            className="homeButtons__fieldGoal"
          >
            Ball
          </button>

          <button
            onClick={handleFoul}
            className="homeButtons__fieldGoal"
          >
            Foul
          </button>

        </div>

        <div className="gameButtons">
          <button
            onClick={() => setQuarter(quarter + 1)}
            className="gameButtons__changeQuarter"
          >
            Change Inning
          </button>
        </div>
       
      </section>
    )
}

export default Dashboard;