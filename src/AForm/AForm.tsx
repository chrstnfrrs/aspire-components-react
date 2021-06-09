import React from 'react';
import clsx from 'clsx';
import { setLayout } from 'aspire-components-functions';

import { ILayoutComponent } from '../types';
import './AForm.scss';

const AForm: React.FC<ILayoutComponent> = (props) => {
  const classList = [props.className, 'a-form', ...setLayout(props)];

  return (
    <form className={clsx(classList)} style={props.style} {...props}>
      {props.children}
    </form>
  );
};

export { AForm };
