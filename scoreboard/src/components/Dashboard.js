import React from 'react';

const Dashboard = ({lionsScore, setLionsScore, tigersScore, setTigersScore, addTouchdown, quarter, setQuarter}) => {

    return (
        <section className="buttons">

        <div className="homeButtons">
         
          <button
            onClick={() => setLionsScore(addTouchdown(lionsScore))}
            className="homeButtons__touchdown"
          >
            Lions Touchdown
          </button>

          <button
            onClick={() => setLionsScore(lionsScore + 3)}
            className="homeButtons__fieldGoal"
          >
            Home Field Goal
          </button>

        </div>

        <div className="gameButtons">
          <button
            onClick={() => setQuarter(quarter + 1)}
            className="gameButtons__changeQuarter"
          >
            Change Quarter
          </button>
        </div>
        <div className="awayButtons">
          <button
            onClick={() => setTigersScore(addTouchdown(tigersScore))}
            className="awayButtons__touchdown"
          >
            Away Touchdown
          </button>
          <button
            onClick={() => setTigersScore(tigersScore + 3)}
            className="awayButtons__fieldGoal"
          >
            Away Field Goal
          </button>
        </div>
      </section>
    )
}

export default Dashboard;