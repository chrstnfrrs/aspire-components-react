import * as React from 'react';

import * as HeadingSelectors from '../typography/heading-selectors';
import '../typography/heading.scss';

const AH6: React.FC<HeadingSelectors.IHeading> = ({
  as,
  'data-testid': testid,
  type,
  ...props
}) => {
  const componentProps = {
    ...props,
    as: as || 'h6',
    'data-testid': testid,
    type: type || 'h6',
  };

  const { Component, className } = HeadingSelectors.getElement(componentProps);

  return (
    <Component className={className} data-testid={testid}>
      {props.children}
    </Component>
  );
};

export { AH6 };
