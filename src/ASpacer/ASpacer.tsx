import React from 'react';
import clsx from 'clsx';
import { setPadding } from 'aspire-components-functions';

import './ASpacer.scss';

const ASpacer: React.FC<IASpacerComponent> = (props) => {
  const classList = [props.className, 'a-spacer', setPadding(props.padding)];

  return (
    <div className={clsx(classList)} style={props.style}>
      {props.children}
    </div>
  );
};

export { ASpacer };
