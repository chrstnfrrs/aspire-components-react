import React from 'react';
import clsx from 'clsx';
import { setLayout } from 'aspire-components-functions';

import { ILayoutComponent } from '../types';
import './ARow.scss';

const ARow: React.FC<ILayoutComponent> = (props) => {
  const classList = [props.className, 'a-row', ...setLayout(props)];

  return (
    <div className={clsx(classList)} style={props.style}>
      {props.children}
    </div>
  );
};

export { ARow };
