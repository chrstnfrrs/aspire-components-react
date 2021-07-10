import React from 'react';
import clsx from 'clsx';
import { setElement, setFontSize } from 'aspire-components-functions';

import { IALabel } from './ALabel.d';
import './ALabel.scss';

const ALabel: React.FC<IALabel> = ({
  backgroundColor,
  className,
  color,
  'data-testid': testid,
  fontSize,
  height,
  margin,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  padding,
  style,
  width,
  ...props
}) => {
  const classList = [
    className,
    'a-label',
    setElement({
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
    setFontSize(fontSize),
  ];

  return (
    <label className={clsx(classList)} data-testid={testid} style={style}>
      {props.children}
    </label>
  );
};

export { ALabel };
export type { IALabel };
