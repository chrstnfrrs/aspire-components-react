import React from 'react';
import clsx from 'clsx';
import { setElement } from 'aspire-components-functions';

import { IElementComponent } from '../types.d';
import './ASpacer.scss';

const ASpacer: React.FC<IElementComponent> = ({
  backgroundColor,
  className,
  color,
  'data-testid': testid,
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
    'a-spacer',
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
  ];

  return (
    <div className={clsx(classList)} data-testid={testid} style={style}>
      {props.children}
    </div>
  );
};

export { ASpacer };
