import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './Button.scss';
import Icon from '../Icon/Icon';

const Button = ({ children, type, className, variant, size, autowidth, fullwidth, unpadded, outlined, icon, iconBefore, iconAfter, ...attributes }) => {
  const classes = [styles['Button'], {
    [`${styles['Button--'+variant]}`]: (variant && !outlined),
    [`${styles['Button--'+variant+'-outlined']}`]: (variant && outlined),
    [`${styles['Button--'+size]}`]: size,
    [`${styles['Button--icon']}`]: icon,
    [`${styles['Button--autowidth']}`]: autowidth,
    [`${styles['Button--fullwidth']}`]: fullwidth,
    [`${styles['Button--unpadded']}`]: unpadded,
  }];

  return (
    <button type={type} className={classnames(classes, className)} {...attributes}>
      {iconBefore && <span className="Button__icon-before"><Icon name={iconBefore} size={size} /></span>}
      {children && <span className="Button__label">{children}</span>}
      {icon && <span className="Button__icon"><Icon name={icon} size={size} /></span>}
      {iconAfter && <span className="Button__icon-after"><Icon name={iconAfter} size={size} /></span>}
    </button>
  );
};

Button.propTypes = {
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
  type: PropTypes.string,
  /* We can use className prop to add a mix class (by BEM) to the block */
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
  variant: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['sm', 'md', 'lg']),
    PropTypes.bool,
  ]),
  autowidth: PropTypes.bool,
  fullwidth: PropTypes.bool,
  unpadded: PropTypes.bool,
  outlined: PropTypes.bool,
  icon: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  iconBefore: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  iconAfter: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
};

Button.defaultProps = {
  children: false,
  type: 'button',
  variant: false,
  size: 'md',
  autowidth: false,
  fullwidth: false,
  unpadded: false,
  outlined: false,
  icon: false,
  iconBefore: false,
  iconAfter: false,
};

export default Button;
