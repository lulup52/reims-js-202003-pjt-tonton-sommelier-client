import React, { useState, useEffect } from 'react';
import { Progress } from 'reactstrap';
import './ProgressBar.css';
import { connect } from 'react-redux';
import winebottle from '../Images/winebottle.png';

const ProgressBarContainer = ({ dispatch, ...props }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(props.score);
  },
  [props.score]);

  return (
    <>
      <div className="progressBarReactStrap">
        <div className="ThreeBottle">
          <img
            src={winebottle}
            alt="logout"
            className="WineBottle"
          />
          <img
            src={winebottle}
            alt="logout"
            className="WineBottle"
          />
          <img
            src={winebottle}
            alt="logout"
            className="WineBottle"
          />
        </div>
        <Progress className="ProgressBar" value={value} max="100" />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  score: state.reducer.score,
});

const ProgressBar = connect(mapStateToProps)(ProgressBarContainer);
export default ProgressBar;
