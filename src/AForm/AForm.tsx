import React from 'react';
import clsx from 'clsx';
import { setLayout } from 'aspire-components-functions';

import { ILayoutComponent } from '../types';
import './AForm.scss';

const AForm: React.FC<ILayoutComponent> = (props) => {
  const classList = [props.className, 'a-form', ...setLayout(props)];

  return (
    <nav className={clsx(classList)} style={props.style}>
      {props.children}
    </nav>
  );
};

export { AForm };
