import React, {PropTypes} from 'react';
import classnames from 'classnames';
import styles from './Button.scss';
import Icon from '../Icon/Icon';

const Button = ({
  children,
  tag: Tag,
  className,
  variant,
  size,
  autowidth,
  fullwidth,
  unpadded,
  outlined,
  icon,
  iconBefore,
  iconAfter,
  ...attributes
}) => {
  if((variant === 'link') || (variant === 'text')) {
    size = undefined;
  }

  const classes = [styles['Button'], {
    [`${styles['Button--' + variant]}`]: (variant && !outlined),
    [`${styles['Button--' + variant + '-outlined']}`]: (variant && outlined),
    [`${styles['Button--' + size]}`]: size,
    [`${styles['Button--icon']}`]: icon,
    [`${styles['Button--autowidth']}`]: autowidth,
    [`${styles['Button--fullwidth']}`]: fullwidth,
    [`${styles['Button--unpadded']}`]: unpadded,
  }];

  if (attributes.href) {
    Tag = 'a';
  }

  return (
    <Tag type={(Tag === 'button') ? 'button' : undefined} className={classnames(classes, className)} {...attributes}>
      {iconBefore && <span className="Button__icon-before"><Icon name={iconBefore}/></span>}
      {children && <span className="Button__label">{children}</span>}
      {icon && <span className="Button__icon"><Icon name={icon}/></span>}
      {iconAfter && <span className="Button__icon-after"><Icon name={iconAfter}/></span>}
    </Tag>
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
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
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
  tag: 'button',
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
