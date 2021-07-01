import * as React from 'react';
import clsx from 'clsx';

import * as Types from '../types.d';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong';
type HeadingAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface IStyleProps {
  as?: HeadingAs;
}

interface IHeading {
  as?: HeadingAs;
  type?: HeadingType;
}

type GetElementClass = (as: HeadingAs) => string;
type GetElementClassList = (styleProps: IStyleProps) => string;
type GetElementType = (type: HeadingType) => React.FC;
type GetElement = (
  props: IHeading,
) => {
  Component: React.FC;
  className: string;
  props: Types.AllowAny;
};

const H1: React.FC = (props) => (
  <h1 data-testid='h1' {...props}>
    {props.children}
  </h1>
);

const H2: React.FC = (props) => (
  <h2 data-testid='h2' {...props}>
    {props.children}
  </h2>
);

const H3: React.FC = (props) => (
  <h3 data-testid='h3' {...props}>
    {props.children}
  </h3>
);

const H4: React.FC = (props) => (
  <h4 data-testid='h4' {...props}>
    {props.children}
  </h4>
);

const H5: React.FC = (props) => (
  <h5 data-testid='h5' {...props}>
    {props.children}
  </h5>
);

const H6: React.FC = (props) => (
  <h6 data-testid='h6' {...props}>
    {props.children}
  </h6>
);

const AStrong: React.FC = (props) => (
  <strong data-testid='strong' {...props}>
    {props.children}
  </strong>
);

const getElementType: GetElementType = (type) => {
  const map = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    strong: AStrong,
  };

  return map[type];
};

const getElementClass: GetElementClass = (as) => {
  const map = {
    h1: 'a-h1',
    h2: 'a-h2',
    h3: 'a-h3',
    h4: 'a-h4',
    h5: 'a-h5',
    h6: 'a-h6',
  };

  return map[as];
};

const getElementClassList: GetElementClassList = (props) => {
  const classes = [getElementClass(props.as as HeadingAs)];

  return clsx(classes);
};

const getElement: GetElement = ({ as, type, ...props }) => {
  const Component = getElementType(type as HeadingType);
  const className = getElementClassList({ as });

  return {
    className,
    Component,
    props,
  };
};

export type { HeadingType, IHeading };
export { getElement };
