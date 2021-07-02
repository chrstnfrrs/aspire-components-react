import React from 'react';
import clsx from 'clsx';
import { setLayout } from 'aspire-components-functions';

import { ILayoutComponent } from '../types';
import './ARow.scss';

const ARow: React.FC<ILayoutComponent> = ({
  align,
  backgroundColor,
  className,
  color,
  'data-testid': testid,
  direction,
  display,
  height,
  justify,
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
    'a-row',
    setLayout({
      align,
      backgroundColor,
      color,
      direction,
      display,
      height,
      justify,
      margin,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      padding,
      width,
    }),
  ];

  return (
    <div className={clsx(classList)} data-testid={testid} style={style}>
      {props.children}
    </div>
  );
};

export { ARow };
