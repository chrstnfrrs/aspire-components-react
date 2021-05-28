import React from 'react';
import clsx from 'clsx';
import { setElement, setFontSize } from 'aspire-components-functions';

import { IATextArea } from './ATextArea.d';
import './ATextArea.scss';

const ATextArea: React.FC<IATextArea> = (props) => {
  const classList = [
    props.className,
    'a-textarea',
    ...setElement(props),
    setFontSize(props.fontSize),
  ];

  return (
    <textarea className={clsx(classList)} style={props.style} {...props} />
  );
};

export { ATextArea };
