import React from 'react';
import clsx from 'clsx';
import { setLayout } from 'aspire-components-functions';

import { ILayoutComponent } from '../types';
import './ACol.scss';

const ACol: React.FC<ILayoutComponent> = (props) => {
  const classList = [props.className, 'a-col', ...setLayout(props)];

  return (
    <div className={clsx(classList)} style={props.style}>
      {props.children}
    </div>
  );
};

export { ACol };
