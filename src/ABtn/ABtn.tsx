import React from 'react';
import clsx from 'clsx';
import { setElement, setElevation } from 'aspire-components-functions';

import { IABtn } from './ABtn.d';
import './ABtn.scss';

const ABtn: React.FC<IABtn> = ({
  backgroundColor,
  className,
  color,
  onClick,
  'data-testid': testid,
  elevation,
  height,
  margin,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  padding,
  style,
  type,
  width,
  ...props
}) => {
  const classList = [
    className,
    'a-btn',
    ...setElement({
      backgroundColor,
      color,
      height,
      margin,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      padding,
      width,
    }),
    setElevation(elevation),
  ];

  return (
    <button
      className={clsx(classList)}
      data-testid={testid}
      onClick={onClick}
      style={style}
      // eslint-disable-next-line react/button-has-type
      type={type || 'button'}
    >
      {props.children}
    </button>
  );
};

export { ABtn };
export type { IABtn };
