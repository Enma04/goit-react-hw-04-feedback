import React from 'react';
import PropTypes from 'prop-types';
import css from '../FeedBack/FeedBack.module.css';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h4 className={css.titleFeedBack}>{title}</h4>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
