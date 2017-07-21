import React, { PropTypes } from 'react';
import Button from '../Button/Button';
import styles from './CustomButtonWithOwnStyle.scss';

const CustomButtonWithOwnStyle = ({ children, ...attributes }) => {
  return (
    <Button className={styles['CustomButtonWithOwnStyle']} {...attributes}>{children}</Button>
  );
};

CustomButtonWithOwnStyle.propTypes = {
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

CustomButtonWithOwnStyle.defaultProps = {
  children: false,
};

export default CustomButtonWithOwnStyle;
