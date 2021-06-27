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

const ACard: React.FC<IACard> = (props) => {
  const classList = [
    props.className,
    'a-card',
    ...setElement(props),
    setAlign(props.align),
    setJustify(props.justify),
    setElevation(props.elevation),
  ];

  return (
    <div className={clsx(classList)} style={props.style} {...props}>
      {props.children}
    </div>
  );
};

export { ACard };
