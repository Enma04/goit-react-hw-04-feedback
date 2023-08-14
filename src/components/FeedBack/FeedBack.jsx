import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {Statistics} from 'components/Statistics/Statistics';
import {FeedbackOptions} from 'components/FeedbackOptions/FeedbackOptions';
import {Section} from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

export default function FeedBack({ step=1, initialValue=0 }) {
  //--------------------------------------
  //------------- PROPS CLASS DEFINITIONS
  const [good, setGood] = useState(initialValue);
  const [neutral, setNeutral] = useState(initialValue);
  const [bad, setBad] = useState(initialValue);
  const [total, setTotal] = useState(initialValue);
  const [percentage, setPercentage] = useState(initialValue);


  //--------------------------------------
  //------------- useEffects
  useEffect(() => {
    setTotal( good + neutral + bad );
    setPercentage( Math.round( (good / total) * 100) );
  }, [good, neutral, bad, total]);


  //--------------------------------------
  //------------- FUNCTIONS
  const funcAdd = (event) => {
    const type = event.target.id;

    if(type === "good") setGood(good + step);
    if(type === "neutral") setNeutral(neutral + step);
    if(type === "bad") setBad(bad + step);
  }


  //--------------------------------------
  //------------- RETURN
    return (
      <div className="feedBackSec">
        <Section title="Please Leave a Feedback">
          <FeedbackOptions onLeaveFeedback={funcAdd} />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={percentage}
            />
          )}
        </Section>
      </div>
    );
}


//--------------------------------------
//------------- PROPTYPES
  FeedBack.propTypes = {
    step: PropTypes.number,
    initialValue: PropTypes.number,
  };
