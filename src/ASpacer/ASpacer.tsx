import React from 'react';
import clsx from 'clsx';
import { setElement } from 'aspire-components-functions';

import { IElementComponent } from '../types.d';
import './ASpacer.scss';

const ASpacer: React.FC<IElementComponent> = (props) => {
  const classList = [props.className, 'a-spacer', setElement(props)];

  return (
    <div className={clsx(classList)} style={props.style}>
      {props.children}
    </div>
  );
};

export { ASpacer };
