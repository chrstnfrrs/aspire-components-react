import * as React from 'react';

import * as TypographySelectors from '../typography/heading-selectors';
import '../typography/headings.scss';

const AH2: React.FC<TypographySelectors.IHeading> = ({
  as,
  'data-testid': testid,
  type,
  ...props
}) => {
  const componentProps = {
    ...props,
    as: as || 'h2',
    'data-testid': testid,
    type: type || 'h2',
  };

  const { Component, className } = TypographySelectors.getElement(
    componentProps,
  );

  return (
    <Component className={className} data-testid={testid}>
      {props.children}
    </Component>
  );
};

export { AH2 };
