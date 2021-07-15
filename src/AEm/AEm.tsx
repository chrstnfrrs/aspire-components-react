import * as React from 'react';

import * as BodySelectors from '../typography/body-selectors';
import '../typography/body.scss';

const AEm: React.FC<BodySelectors.IBody> = ({
  as,
  'data-testid': testid,
  type,
  ...props
}) => {
  const componentProps = {
    ...props,
    as,
    'data-testid': testid,
    type: type || 'em',
  };

  const { Component, className } = BodySelectors.getElement(componentProps);

  return (
    <Component className={className} data-testid={testid}>
      {props.children}
    </Component>
  );
};

export { AEm };
