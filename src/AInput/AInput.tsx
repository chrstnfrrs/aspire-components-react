import React from 'react';
import clsx from 'clsx';
import { setElement, setFontSize } from 'aspire-components-functions';

import { IAInput } from './AInput.d';
import './AInput.scss';

const AInput: React.FC<IAInput> = ({
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
  id,
  name,
  placeholder,
  onBlur,
  onChange,
}) => {
  const classList = [
    className,
    'a-input',
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
    <input
      className={clsx(classList)}
      data-testid={testid}
      id={id}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
    />
  );
};

export { AInput };
export type { IAInput };
