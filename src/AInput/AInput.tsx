import React from 'react';
import clsx from 'clsx';
import { setElement, setFontSize } from 'aspire-components-functions';

import { IAInput } from './AInput.d';
import './AInput.scss';

const AInput: React.FC<IAInput> = (props) => {
  const classList = [
    props.className,
    'a-input',
    ...setElement(props),
    setFontSize(props.fontSize),
  ];

  return <input className={clsx(classList)} style={props.style} {...props} />;
};

export { AInput };
