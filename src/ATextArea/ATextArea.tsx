import React from 'react';
import clsx from 'clsx';
import { setElement, setFontSize } from 'aspire-components-functions';

import { IATextArea } from './ATextArea.d';
import './ATextArea.scss';

const ATextArea: React.FC<IATextArea> = ({
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
    'a-textarea',
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
    <textarea
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

export { ATextArea };
export type { IATextArea };
