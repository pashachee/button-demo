import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {emojify} from 'node-emoji';
import styles from './Icon.scss';

const Icon = ({name, className, ...attributes}) => {
  const isEmoji = (name[0] === ':');
  let iconContent = '';
  let iconName = name;

  if (isEmoji) {
    iconContent = emojify(name);
    iconName = 'emoji';
  }

  const classes = [styles['Icon'], {
    [`${styles['Icon--' + iconName]}`]: iconName
  }];

  return (
    <span {...attributes} className={classnames(classes, className)}>{iconContent}</span>
  );
};

Icon.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
  name: PropTypes.string.isRequired,
};

export default Icon;
