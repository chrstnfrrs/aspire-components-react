import React from 'react';
import clsx from 'clsx';
import { setLayout, setGap } from 'aspire-components-functions';

import { IAGrid } from './AGrid.d';
import './AGrid.scss';

const AGrid: React.FC<IAGrid> = ({
  align,
  backgroundColor,
  className,
  color,
  'data-testid': testid,
  direction,
  display,
  height,
  gap,
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
    'a-grid',
    setGap(gap),
    ...setLayout({
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

export { AGrid };
export type { IAGrid };
