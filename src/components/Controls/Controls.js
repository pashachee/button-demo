import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './Controls.scss';

const Controls = ({ children, layout, vertical, className, ...attributes }) => {
  const items = children.map((item, index) =>
    <div key={index} className="Controls__item">{item}</div>
  );

  const classes = [styles['Controls'], {
    [`${styles['Controls--'+layout]}`]: layout,
    [`${styles['Controls--vertical']}`]: vertical,
  }];

  return (
    <div {...attributes} className={classnames(classes, className)}>{items}</div>
  );
};

Controls.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.element,
    )
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
  layout: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['narrow', 'wide']),
  ]),
};

Controls.defaultProps = {
  layout: false,
  vertical: false,
};

export default Controls;
