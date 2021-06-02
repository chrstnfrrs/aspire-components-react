import React from 'react';
import clsx from 'clsx';
import { setWidth, setHeight } from 'aspire-components-functions';

import { IASpacerComponent } from './ASpacer.d';
import './ASpacer.scss';

const ASpacer: React.FC<IASpacerComponent> = (props) => {
  const classList = [
    props.className,
    'a-spacer',
    setWidth(props.size),
    setHeight(props.size),
  ];

  return (
    <div className={clsx(classList)} style={props.style}>
      {props.children}
    </div>
  );
};

export { ASpacer };
