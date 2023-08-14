import React from 'react';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {return <h5>{message}</h5>;}

Notification.propTypes = {
  message: PropTypes.string,
};
