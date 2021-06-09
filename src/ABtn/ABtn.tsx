import React from 'react';
import clsx from 'clsx';
import { setElement, setElevation } from 'aspire-components-functions';

import { IABtn } from './ABtn.d';
import './ABtn.scss';

const ABtn: React.FC<IABtn> = (props) => {
  const classList = [
    props.className,
    'a-btn',
    ...setElement(props),
    setElevation(props.elevation),
  ];

  return (
    <button
      className={clsx(classList)}
      onClick={props.onClick}
      style={props.style}
      // eslint-disable-next-line react/button-has-type
      type={props.type || 'button'}
    >
      {props.children}
    </button>
  );
};

export { ABtn };
