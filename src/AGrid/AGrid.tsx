import React from 'react';
import clsx from 'clsx';
import { setLayout, setGap } from 'aspire-components-functions';

import { IAGrid } from './AGrid.d';
import './AGrid.scss';

const AGrid: React.FC<IAGrid> = (props) => {
  const classList = [
    props.className,
    'a-grid',
    setGap(props.gap),
    ...setLayout(props),
  ];

  return (
    <div className={clsx(classList)} style={props.style}>
      {props.children}
    </div>
  );
};

export { AGrid };
