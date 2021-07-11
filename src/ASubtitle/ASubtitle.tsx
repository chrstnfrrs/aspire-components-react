import * as React from 'react';

import * as HeadingSelectors from '../typography/heading-selectors';
import '../typography/heading.scss';

const ASubtitle: React.FC<HeadingSelectors.IHeading> = ({
  as,
  'data-testid': testid,
  type,
  ...props
}) => {
  const componentProps = {
    ...props,
    as: as || 'subtitle-1',
    'data-testid': testid,
    type: type || 'strong',
  };

  const { Component, className } = HeadingSelectors.getElement(componentProps);

  return (
    <Component className={className} data-testid={testid}>
      {props.children}
    </Component>
  );
};

export { ASubtitle };
