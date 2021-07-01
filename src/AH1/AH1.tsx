import * as React from 'react';

import * as TypographySelectors from '../selectors/typography-selectors';

const AH1: React.FC<TypographySelectors.IHeading> = (props) => {
  const componentProps = {
    ...props,
    as: props.as ? props.as : 'h1',
    type: props.type ? props.type : 'h1',
  };

  const {
    Component,
    className,
    props: remainingProps,
  } = TypographySelectors.getElement(componentProps);

  return <Component className={className} {...remainingProps} />;
};

export { AH1 };
