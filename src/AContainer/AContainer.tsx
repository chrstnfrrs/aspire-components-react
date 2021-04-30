import React from 'react';
import clsx from 'clsx';
import { setLayout } from 'aspire-components-functions';

import { ILayoutComponent } from '../types';
import './AContainer.scss';

const AContainer: React.FC<ILayoutComponent> = (props) => {
  const classList = [props.className, 'a-container', ...setLayout(props)];

  return (
    <div className={clsx(classList)} style={props.style}>
      {props.children}
    </div>
  );
};

export { AContainer };
