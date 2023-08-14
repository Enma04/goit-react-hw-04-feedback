import React from 'react';
import PropTypes from 'prop-types';
import css from '../FeedBack/FeedBack.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={css.buttonGroup}>
      <button id="good" className={css.btnFeedBack} onClick={onLeaveFeedback}>
        Good
      </button>
      <button id="neutral" className={css.btnFeedBack} onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button id="bad" className={css.btnFeedBack} onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
