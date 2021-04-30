import React from 'react';
import clsx from 'clsx';
import { setLayout } from 'aspire-components-functions';

import { ILayoutComponent } from '../types';
import './ASection.scss';

const ASection: React.FC<ILayoutComponent> = (props) => {
  const classList = [props.className, 'a-section', ...setLayout(props)];

  return (
    <section className={clsx(classList)} style={props.style}>
      {props.children}
    </section>
  );
};

export { ASection };
