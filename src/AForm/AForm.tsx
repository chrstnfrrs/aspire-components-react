import React from 'react';
import clsx from 'clsx';
import { setLayout } from 'aspire-components-functions';

import { IAForm } from './AForm.d';
import './AForm.scss';

const AForm: React.FC<IAForm> = ({
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
  onSubmit,
  padding,
  style,
  width,
  ...props
}) => {
  const classList = [
    className,
    'a-form',
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
    <form
      className={clsx(classList)}
      data-testid={testid}
      onSubmit={onSubmit}
      style={style}
    >
      {props.children}
    </form>
  );
};

export { AForm };
export type { IAForm };
