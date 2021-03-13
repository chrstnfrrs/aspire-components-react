import React from 'react';
import clsx from 'clsx';
import { setJustify, setAlign } from 'aspire-components-functions';

import { AContainerProps } from './AContainer.types';
import './AContainer.scss';

const AContainer: React.FC<AContainerProps> = (props) => {
  const classList = [
    props.className,
    'a-container',
    setJustify(props.justify),
    setAlign(props.align),
  ];

  return <div className={clsx(classList)}>{props.children}</div>;
};

export default AContainer;
