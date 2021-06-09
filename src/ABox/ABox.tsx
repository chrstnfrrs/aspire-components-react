import React from 'react';
import clsx from 'clsx';
import { setLayout } from 'aspire-components-functions';

import { ILayoutComponent } from '../types.d';
import './ABox.scss';

const ABox: React.FC<ILayoutComponent> = (props) => {
  const classList = [props.className, 'a-box', ...setLayout(props)];

  return (
    <div className={clsx(classList)} style={props.style}>
      {props.children}
    </div>
  );
};

export { ABox };
