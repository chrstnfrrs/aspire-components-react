import * as React from 'react';

interface ITypography {
  children: React.ReactChild;
}

type TypographyAs = 'h1' | 'h2';
type SelectorFunction = (type: TypographyAs) => React.FC<ITypography>;

const H1: React.FC<ITypography> = (props) => (
  <h1 data-testid='h1' {...props}>
    {props.children}
  </h1>
);

const H2: React.FC<ITypography> = (props) => (
  <h2 data-testid='h2' {...props}>
    {props.children}
  </h2>
);

const getElementType: SelectorFunction = (type) => {
  const map = {
    h1: H1,
    h2: H2,
  };

  return map[type];
};

export { getElementType, TypographyAs };
