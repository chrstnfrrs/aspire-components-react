import * as React from 'react';

import * as HeadingSelectors from '../typography/heading-selectors';
import '../typography/headings.scss';

const AH3: React.FC<HeadingSelectors.IHeading> = ({
  as,
  'data-testid': testid,
  type,
  ...props
}) => {
  const componentProps = {
    ...props,
    as: as || 'h3',
    'data-testid': testid,
    type: type || 'h3',
  };

  const { Component, className } = HeadingSelectors.getElement(componentProps);

  return (
    <Component className={className} data-testid={testid}>
      {props.children}
    </Component>
  );
};

export { AH3 };
