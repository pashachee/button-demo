import React, { PropTypes } from 'react';
import Button from '../Button/Button';
import styles from './CallToActionButton.scss';

const CallToActionButton = ({ children, ...attributes }) => {
  return (
    <Button className={styles['CallToActionButton']} size={false} {...attributes}>{children}</Button>
  );
};

CallToActionButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.element,
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.element,
    )
  ]),
};

CallToActionButton.defaultProps = {
  children: false,
};

export default CallToActionButton;
