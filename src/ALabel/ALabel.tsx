import React from 'react';
import clsx from 'clsx';
import { setElement, setFontSize } from 'aspire-components-functions';

import { IALabel } from './ALabel.d';
import './ALabel.scss';

const ALabel: React.FC<IALabel> = (props) => {
  const classList = [
    props.className,
    'a-label',
    ...setElement(props),
    setFontSize(props.fontSize),
  ];

  return <label className={clsx(classList)}>{props.children}</label>;
};

export { ALabel };
