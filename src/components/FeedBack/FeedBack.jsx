import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

export default function FeedBack({ step=1, initialValue=0 }) {
  //--------------------------------------
  //------------- PROPS CLASS DEFINITIONS
  const [good, setGood] = useState(initialValue);
  const [neutral, setNeutral] = useState(initialValue);
  const [bad, setBad] = useState(initialValue);
  const [total, setTotal] = useState(initialValue);
  const [percentage, setPercentage] = useState(initialValue);
  
  const propTypes = {
    step: PropTypes.number,
    initialValue: PropTypes.number,
  };


  //--------------------------------------
  //------------- useEffects
  useEffect(() => {
    console.log("Cambiando el total...", total);
    countTotalFeedback();
  }, [good, neutral, bad]);

  useEffect(() => {
    console.log("Cambiando el percentage...", percentage);
    countPositiveFeedbackPercentage();
  }, [good]);


  //--------------------------------------
  //------------- FUNCTIONS
  const funcAdd = (event) => {
    const type = event.target.id;

    if(type === good) setGood(good + step);
    if(type === neutral) setNeutral(neutral + step);
    if(type === bad) setBad(bad + step);
  }

  const countTotalFeedback = () => {
    setTotal( good + neutral + bad );
  }

  const countPositiveFeedbackPercentage = () => {
    setPercentage( Math.round((good / total) * 100) );
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
