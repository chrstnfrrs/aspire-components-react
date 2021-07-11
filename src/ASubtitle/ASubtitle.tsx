import * as React from 'react';

import * as TypographySelectors from '../typography/heading-selectors';
import '../typography/headings.scss';

const ASubtitle: React.FC<TypographySelectors.IHeading> = ({
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

  const { Component, className } = TypographySelectors.getElement(
    componentProps,
  );

  return (
    <Component className={className} data-testid={testid}>
      {props.children}
    </Component>
  );
};

export { ASubtitle };
