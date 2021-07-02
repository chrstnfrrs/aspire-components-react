import React from 'react';
import clsx from 'clsx';
import {
  setAlign,
  setElement,
  setElevation,
  setJustify,
} from 'aspire-components-functions';

import { IACard } from './ACard.d';
import './ACard.scss';

const ACard: React.FC<IACard> = ({
  align,
  backgroundColor,
  className,
  color,
  'data-testid': testid,
  elevation,
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
    'a-card',
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
    setAlign(align),
    setJustify(justify),
    setElevation(elevation),
  ];

  return (
    <div className={clsx(classList)} data-testid={testid} style={style}>
      {props.children}
    </div>
  );
};

export { ACard };
export type { IACard };
